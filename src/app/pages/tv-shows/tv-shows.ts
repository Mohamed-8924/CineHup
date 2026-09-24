import { Component, computed, effect, inject, output, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Filter } from '../../shared/filter/filter';
import { MediaCard } from '../../shared/media-card/media-card';
import { TvService } from '../../core/services/tv-service';

type tvCategory = 'popular' | 'airing_today' | 'on_the_air' | 'top_rated';
export interface sortOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-tv-shows',
  imports: [SelectButtonModule, FormsModule, CommonModule, Filter, MediaCard],
  templateUrl: './tv-shows.html',
  styleUrl: './tv-shows.scss',
})
export class TVShows {
  constructor() {
    effect(() => {
      const categoryData = this.categoryTvShows();

      if (categoryData?.results) {
        this.tvList.set(categoryData.results);
      }
    });
  }

  private tvService = inject(TvService);

  tvList = signal<any[]>([]);

  categoriOptions = [
    { label: 'Popular', value: 'popular' },
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'On TV', value: 'on_the_air' },
    { label: 'Top Rated', value: 'top_rated' },
  ];

  selectedCategory = signal<tvCategory>('popular');

  selectedCategoryLabel = computed(() => {
    const found = this.categoriOptions.find((opt) => opt.value === this.selectedCategory());
    return found ? found.label : '';
  });

  categoryTvShows = toSignal(
    toObservable(this.selectedCategory).pipe(
      switchMap((category) => {
        switch (category) {
          case 'popular':
            return this.tvService.getPopularTv();
          case 'airing_today':
            return this.tvService.getAiringTodayTv();
          case 'on_the_air':
            return this.tvService.getOnTv();
          case 'top_rated':
            return this.tvService.getTopRatedTv();
        }
      }),
    ),
    { initialValue: null },
  );
  onCategoryChange(value: string) {
    this.selectedCategory.set(value as tvCategory);
  }

  tvSortOptions = signal<sortOption[]>([
    { label: 'Popularity Descending', value: 'popularity.desc' },
    { label: 'Popularity Ascending', value: 'popularity.asc' },
    { label: 'Rating Descending', value: 'vote_average.desc' },
    { label: 'Rating Ascending', value: 'vote_average.asc' },
    { label: 'First Air Date Descending', value: 'first_air_date.desc' },
    { label: 'First Air Date Ascending', value: 'first_air_date.asc' },
  ]);

  selectedTvSort = signal<sortOption>(this.tvSortOptions()[0]);

  tvGenres = signal([
    { id: 10759, label: 'Action & Adventure', checked: false },
    { id: 16, label: 'Animation', checked: false },
    { id: 35, label: 'Comedy', checked: false },
    { id: 80, label: 'Crime', checked: false },
    { id: 99, label: 'Documentary', checked: false },
    { id: 18, label: 'Drama', checked: false },
    { id: 10751, label: 'Family', checked: false },
    { id: 10762, label: 'Kids', checked: false },
    { id: 9648, label: 'Mystery', checked: false },
    { id: 10763, label: 'News', checked: false },
    { id: 10764, label: 'Reality', checked: false },
    { id: 10765, label: 'Sci-Fi & Fantasy', checked: false },
    { id: 10766, label: 'Soap', checked: false },
    { id: 10767, label: 'Talk', checked: false },
    { id: 10768, label: 'War & Politics', checked: false },
    { id: 37, label: 'Western', checked: false },
  ]);

  tvReleaseTypes = signal([]);

  // applyTvFilter(filtersPayload: any) {
  //   console.log('Filters to send to TV API');
  // }

  ngOnInit() {
    // 2. أول ما الصفحة تفتح، اطلب الداتا بالترتيب الافتراضي
    this.applyTvFilter({ sort_by: this.selectedTvSort().value });
  }

  // 3. الدالة اللي هتستقبل الفلتر وتجيب الداتا
  applyTvFilter(filtersPayload: any) {
    console.log('استلمنا الداتا من الفلتر المشترك وهنكلم الـ API:', filtersPayload);

    this.tvService.discoverTvShows(filtersPayload).subscribe({
      next: (response) => {
        console.log('Data received from TV API', response.results);
        // 4. خزن الداتا في المتغير بتاعك عشان الـ HTML يشوفها
        this.tvList.set(response.results);
      },
      error: (error) => {
        console.log('Error fetching TV shows', error);
      },
    });
  }
}
