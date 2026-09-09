import {
  afterNextRender,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-movie-row',
  imports: [SelectButtonModule, FormsModule],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.scss',
})
export class MovieRow implements OnChanges {
  @Input() title = '';
  @Input() movies: any[] = [];
  @Input() tabOptions: { label: string; value: string }[] = [];
  @Input() activeTab: string | null = null;
  @Output() activeTabChange = new EventEmitter<string>();

  @ViewChild('scrollRow') scrollRow!: ElementRef<HTMLDivElement>;

  private injector = inject(Injector);

  ngOnChanges() {
    afterNextRender(
      () => {
        if (this.scrollRow) {
          this.scrollRow.nativeElement.scrollLeft = 0;
        }
      },
      { injector: this.injector },
    );
  }
}
