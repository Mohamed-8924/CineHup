import { Component, computed, HostListener, inject, effect, signal } from '@angular/core';
import { MovieService } from '../../core/services/movie';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Filter } from '../../shared/filter/filter';
import { RouterLink } from '@angular/router';
import { FavoriteMovie, FavoritesMovieService } from '../../core/services/favorites';
import { MediaCard } from '../../shared/media-card/media-card';
type MovieCategory = 'popular' | 'now_playing' | 'top_rated' | 'upcoming';

export interface sortOption {
  label: string;
  value: string;
}
@Component({
  selector: 'app-movies',
  imports: [SelectButtonModule, FormsModule, CommonModule, Filter, MediaCard],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {
  constructor() {
    effect(() => {
      const categoryData = this.categoryMovies();

      if (categoryData?.results) {
        this.moviesList.set(categoryData.results);
      }
    });
  }

  public favoritesService = inject(FavoritesMovieService);
  private movieService = inject(MovieService);

  moviesList = signal<any[]>([]);

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
  $event: any;
  onCategoryChange(value: string) {
    this.selectedCategorys.set(value as MovieCategory);
  }

  //=================================
  // 1. خيارات الترتيب الخاصة بالأفلام
  movieSortOptions = signal<sortOption[]>([
    { label: 'Popularity Descending', value: 'popularity.desc' },
    { label: 'Popularity Ascending', value: 'popularity.asc' },
    { label: 'Rating Descending', value: 'vote_average.desc' },
    { label: 'Rating Ascending', value: 'vote_average.asc' },
    { label: 'Release Date Descending', value: 'release_date.desc' },
    { label: 'Release Date Ascending', value: 'release_date.asc' },
  ]);

  // 2. القيمة المبدئية للترتيب (أول عنصر في ال Array)
  selectedMovieSort = signal<sortOption>(this.movieSortOptions()[0]);

  // 3. الأنواع (Genres) الخاصة بالأفلام بس
  // 1. تصنيفات الأفلام (Movie Genres) الرسمية من TMDB
  movieGenres = signal([
    { id: 28, label: 'Action', checked: false },
    { id: 12, label: 'Adventure', checked: false },
    { id: 16, label: 'Animation', checked: false },
    { id: 35, label: 'Comedy', checked: false },
    { id: 80, label: 'Crime', checked: false },
    { id: 99, label: 'Documentary', checked: false },
    { id: 18, label: 'Drama', checked: false },
    { id: 10751, label: 'Family', checked: false },
    { id: 14, label: 'Fantasy', checked: false },
    { id: 36, label: 'History', checked: false },
    { id: 27, label: 'Horror', checked: false },
    { id: 10402, label: 'Music', checked: false },
    { id: 9648, label: 'Mystery', checked: false },
    { id: 10749, label: 'Romance', checked: false },
    { id: 878, label: 'Science Fiction', checked: false },
    { id: 10770, label: 'TV Movie', checked: false },
    { id: 53, label: 'Thriller', checked: false },
    { id: 10752, label: 'War', checked: false },
    { id: 37, label: 'Western', checked: false },
  ]);

  // 2. أنواع الإصدار (Release Types) الرسمية من TMDB
  movieReleaseTypes = signal([
    { id: 1, label: 'Premiere', checked: true },
    { id: 2, label: 'Theatrical (limited)', checked: true },
    { id: 3, label: 'Theatrical', checked: true },
    { id: 4, label: 'Digital', checked: true },
    { id: 5, label: 'Physical', checked: true },
    { id: 6, label: 'TV', checked: true },
  ]);

  ngOnInit() {
    this.applyMoviesFilter({ sort_by: this.selectedMovieSort().value });
  }

  applyMoviesFilter(filtersPayload: any) {
    console.log('استلمنا الداتا من الفلتر المشترك وهنكلم الـ API:', filtersPayload);

    this.movieService.discoverMovies(filtersPayload).subscribe({
      next: (response) => {
        console.log('Date recived form API', response.results);

        this.moviesList.set(response.results);
      },
      error: (error) => {
        console.log('Error fetching movies', error);
      },
    });
  }

  onToggleFavorite(movie: FavoriteMovie) {
    this.favoritesService.toggleFavorite(movie);
  }
}
