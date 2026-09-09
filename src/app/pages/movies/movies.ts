import { Component, computed, inject, signal } from '@angular/core';
import { MovieService } from '../../core/services/movie';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type MovieCategory = 'popular' | 'now_playing' | 'top_rated' | 'upcoming';

@Component({
  selector: 'app-movies',
  imports: [SelectButtonModule, FormsModule, CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {
  private movieService = inject(MovieService);

  categoriOptions = [
    { label: 'Popular', value: 'popular' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  selectedCategorys = signal<MovieCategory>('popular');

  selectedCategoryLabel = computed(() => {
    const found = this.categoriOptions.find((opt) => opt.value === this.selectedCategorys());
    return found ? found.label : '';
  });

  categoryMovies = toSignal(
    toObservable(this.selectedCategorys).pipe(
      switchMap((category) => {
        switch (category) {
          case 'popular':
            return this.movieService.getPopularMovies();
          case 'now_playing':
            return this.movieService.getNowPlayingMovies();
          case 'top_rated':
            return this.movieService.getTopRatedMovies();
          case 'upcoming':
            return this.movieService.getUpcomingMovies();
        }
      }),
    ),
    { initialValue: null },
  );
  onCategoryChange(value: string) {
    this.selectedCategorys.set(value as MovieCategory);
  }
}
