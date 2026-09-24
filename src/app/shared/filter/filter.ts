import { Component, computed, HostListener, model, output, signal, input } from '@angular/core';

type SectionType = 'sort' | 'filters';
export interface sortOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  // 1. الداتا اللي بتيجي من الأب (Movies أو TV Shows)
  // ==========================================
  genresTypes = model<any[]>([]);
  releaseTypes = model<any[]>([]);

  // بنستخدم input لأننا بنعرضها بس ومش بنعدل في المصفوفة نفسها
  sortOptions = input<sortOption[]>([]);

  // بنستقبل قيمة الترتيب الافتراضية
  selectedSort = model<sortOption>();

  // 2. الـ State الداخلي بتاع الفلتر (زي ما هو بالظبط)
  // ==========================================
  isSortOpen = signal<boolean>(false);
  isFiltersOpen = signal<boolean>(false);
  isCustomSelectOpen = signal<boolean>(false);
  isAllReleasesChecked = signal<boolean>(false);

  hasChange = signal<boolean>(false);

  fromDate = signal<string>('');
  toDate = signal<string>('');

  minLimit = 0;
  maxLimit = 10;

  minScore = signal(0);
  maxScore = signal(10);

  minPercent = computed(() => (this.minScore() / this.maxLimit) * 100);
  maxPercent = computed(() => (this.maxScore() / this.maxLimit) * 100);

  mediaType = input<'movie' | 'tv'>('movie');

  // 3. المخرج (Output)
  // ==========================================
  searchApplied = output<any>();

  // 4. الدوال (Logic) - زي ما هي بالظبط مع تعديلات بسيطة
  // ==========================================
  toggleSection(sectionName: SectionType) {
    if (sectionName === 'sort') {
      this.isSortOpen.update((v) => !v);
    } else if (sectionName === 'filters') {
      this.isFiltersOpen.update((v) => !v);
    }
  }

  toggleCustomSelect() {
    this.isCustomSelectOpen.update((v) => !v);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // نتأكد هل الضغطة حصلت بره الكومبوننت بالكامل ولا جواه
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-select-wrapper')) {
      this.isCustomSelectOpen.set(false); // نقفل القايمة أوتوماتيك
    }
  }

  toggleReleases() {
    this.isAllReleasesChecked.update((v) => !v);
    this.hasChange.set(true);
  }

  selectOption(option: sortOption) {
    this.selectedSort.set(option);
    this.isCustomSelectOpen.set(false);
    this.hasChange.set(true);
  }

  toggleReleaseType(id: number) {
    this.releaseTypes.update((types) =>
      types.map((type) => (type.id === id ? { ...type, checked: !type.checked } : type)),
    );
    this.hasChange.set(true);
  }

  toggleGenresType(id: number) {
    this.genresTypes.update((types) =>
      types.map((type) => (type.id === id ? { ...type, checked: !type.checked } : type)),
    );
    this.hasChange.set(true);
  }

  updateFromDate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fromDate.set(input.value);
    this.hasChange.set(true);
  }

  updateToDate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.toDate.set(input.value);
    this.hasChange.set(true);
  }

  updateMin(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = Number(input.value);

    if (newValue <= this.maxScore()) {
      this.minScore.set(newValue);
    } else {
      input.value = this.minScore().toString();
    }
    this.hasChange.set(true);
  }

  updateMax(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = Number(input.value);

    if (newValue >= this.minScore()) {
      this.maxScore.set(newValue);
    } else {
      input.value = this.maxScore().toString();
    }
    this.hasChange.set(true);
  }

  onSearch() {
    if (!this.hasChange()) return;

    // الأوبجكت الفاضي اللي هملاه بالأسماء اللي TMDB بيفهمها
    const tmdbPayload: any = {};

    //1. الترتيب
    if (this.selectedSort()?.value) {
      tmdbPayload.sort_by = this.selectedSort()?.value;
    }

    // 2. تجميع الـ Genres المختارة بس (نجيب الـ id بتاعهم)
    const selectedGenres = this.genresTypes()
      .filter((g) => g.checked)
      .map((g) => g.id);


    if (selectedGenres.length > 0) {
      tmdbPayload.with_genres = selectedGenres.join(',');
    }

    //3. التقييم
    tmdbPayload['vote_average.gte'] = this.minScore();
    tmdbPayload['vote_average.lte'] = this.maxScore();

    // 4. التواريخ (بستخدم mediaType عشان احدد ده فيلم ولا مسلسل)
    const datePrefix = this.mediaType() === 'movie' ? 'primary_release_date' : 'first_air_date';

    if (this.fromDate()) {
      tmdbPayload[`${datePrefix}.gte`] = this.fromDate();
    }
    if (this.toDate()) {
      tmdbPayload[`${datePrefix}.lte`] = this.toDate();
    }

    // 5. أنواع الإصدار (لو أفلام ومتعلم عليها)
    if (this.mediaType() === 'movie' && this.isAllReleasesChecked()) {
      const selectedReleases = this.releaseTypes()
        .filter((r) => r.checked)
        .map((r) => r.id);

      if (selectedReleases.length > 0) {
        tmdbPayload.with_release_type = selectedReleases.join('|');
      }
    }

    console.log('Filters to send to API:', tmdbPayload);
    this.searchApplied.emit(tmdbPayload);

    this.hasChange.set(false);
  }
  }
