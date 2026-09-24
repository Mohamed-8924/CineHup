import { Component, effect, inject, OnInit, Pipe, signal } from '@angular/core';
import { MovieService } from '../../core/services/movie';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { LeaderboardUser, Movie } from '../../core/interfaces/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieRow } from '../../shared/movie-row/movie-row';
import { MOCK_LEADERBOARD_USERS } from '../../shared/mock-data/leaderboard';
import { CommonModule } from '@angular/common';
import { FavoriteMovie, FavoritesMovieService } from '../../core/services/favorites';
@Component({
  selector: 'app-home',
  imports: [FormsModule, SelectButtonModule, MovieRow, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  closeTrailer() {
    this.selectedVideoKey.set(null);
  }
  private movieService = inject(MovieService);
  private router = inject(Router);
  private routerAc = inject(ActivatedRoute);
  public favoritesService = inject(FavoritesMovieService);

  searchQuery = signal('');

  //navbar trailer section
  // first movie trending in the img
  heroMovie = toSignal(this.movieService.getTrendingMovie().pipe(map((res) => res.results[0])), {
    initialValue: null,
  });

  movies = toSignal(this.movieService.getPopularMovies().pipe(map((res) => res.results)), {
    initialValue: [],
  });

  onSearch() {
    const query = this.searchQuery().trim();
    if (query) {
      this.router.navigate(['/search'], { queryParams: { query } });
    }

    this.routerAc.fragment.subscribe((fragment) => {
      if (fragment === 'hero-search') {
        setTimeout(() => {
          const el = document.getElementById('hero-search');
          el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el?.focus();
        });
      }
    });
  }

  /////////////////////////
  //img Trailer Section

  timeWindowOptions = [
    { label: 'Today', value: 'day' },
    { label: 'This Week', value: 'week' },
  ];
  popularFilterOptions = [
    { label: 'Streaming', value: 'streaming' },
    { label: 'On TV', value: 'on-tv' },
    { label: 'For Rent', value: 'for-rent' },
    { label: 'In Theaters', value: 'in-theaters' },
  ];
  freeFilterOptions = [
    { label: 'Movies', value: 'movie' },
    { label: 'TV', value: 'tv' },
  ];
  selectedTimeWindow = signal<'day' | 'week'>('day');
  selectedPopularFilter = signal<'streaming' | 'on-tv' | 'for-rent' | 'in-theaters'>('streaming');
  selectedFreeFilter = signal<'movie' | 'tv'>('movie');

  trendingMovies = toSignal(
    toObservable(this.selectedTimeWindow).pipe(
      switchMap((timeWindow) => this.movieService.getTrendingMovie(timeWindow)),
    ),
    { initialValue: null },
  );
  onTrendingTabChange(value: string) {
    this.selectedTimeWindow.set(value as 'day' | 'week');
  }

  popularMovies = toSignal(
    toObservable(this.selectedPopularFilter).pipe(
      switchMap((filter) => {
        switch (filter) {
          case 'streaming':
            return this.movieService.getStreamingMovies();
          case 'on-tv':
            return this.movieService.getOnTvMovies();
          case 'for-rent':
            return this.movieService.getForRentMovies();
          case 'in-theaters':
            return this.movieService.getInTheatersMovies();
          default:
            return this.movieService.getStreamingMovies();
        }
      }),
    ),
    { initialValue: null },
  );

  onPopularTabChange(value: string) {
    this.selectedPopularFilter.set(value as 'streaming' | 'on-tv' | 'for-rent' | 'in-theaters');
  }

  freeMovies = toSignal(
    toObservable(this.selectedFreeFilter).pipe(
      switchMap((type) => this.movieService.getFreeToWatchMovies(type)),
    ),
    { initialValue: null },
  );
  onFreeTabChange(value: string) {
    this.selectedFreeFilter.set(value as 'movie' | 'tv');
  }
  ///////////////////////
  //Movie Trailer Section

  selectedTrailerFilter = signal<'popular' | 'streaming' | 'on_tv' | 'for_rent' | 'in_theaters'>(
    'popular',
  );
  trailerMovies = signal<Movie[]>([]);
  trailerVideos = signal<Record<number, string>>({});
  selectedVideoKey = signal<string | null>(null);

  trailerFilterOptions = [
    { label: 'Popular', value: 'popular' },
    { label: 'Streaming', value: 'streaming' },
    { label: 'On TV', value: 'on_tv' },
    { label: 'For Rent', value: 'for_rent' },
    { label: 'In Theaters', value: 'in_theaters' },
  ];
  private sanitizer = inject(DomSanitizer);
  constructor() {
    effect(() => {
      this.loadTrailerMovies(this.selectedTrailerFilter());
    });
  }

  loadTrailerMovies(filter: string) {
    const requst$ =
      filter === 'popular'
        ? this.movieService.getPopularMovies()
        : filter === 'streaming'
          ? this.movieService.getStreamingMovies()
          : filter === 'on_tv'
            ? this.movieService.getOnTvMovies()
            : filter === 'for_rent'
              ? this.movieService.getForRentMovies()
              : this.movieService.getInTheatersMovies();

    requst$.subscribe((res) => {
      this.trailerMovies.set(res.results);
      this.trailerVideos.set({});
    });
  }

  openTrailer(movieId: number) {
    this.movieService.getMovieVideos(movieId).subscribe((res: any) => {
      const trailer = res.results.find((v: any) => v.site === 'YouTube' && v.type === 'Trailer');
      if (trailer) {
        this.selectedVideoKey.set(trailer.key);
      }
    });
  }
  clearTrailer() {
    this.selectedVideoKey.set(null);
  }
  getSafeUrl(key: string | null): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${key}?autoplay=1`,
    );
  }

  users: LeaderboardUser[] = MOCK_LEADERBOARD_USERS;

  toggleFavorite(movie: FavoriteMovie) {
    this.favoritesService.toggleFavorite(movie);
  }
}
