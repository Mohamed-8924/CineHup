import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { MovieResponse } from '../interfaces/http';

export type TimeWindow = 'day' | 'week';

@Service()
export class MovieService {
  private http = inject(HttpClient);

  getPopularMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${environment.tmdbReadAccessToken}`,
      },
    });
  }

  getTrendingMovie(timeWindow: TimeWindow = 'day') {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/trending/movie/${timeWindow}`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getNowPlayingMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/movie/now_playing`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getUpcomingMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/movie/upcoming`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getTopRatedMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/movie/top_rated`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getStreamingMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/discover/movie`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
      params: {
        with_watch_monetization_types: 'flatrate',
        watch_region: 'US',
        sort_by: 'popularity.desc',
      },
    });
  }

  getOnTvMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/discover/movie`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
      params: {
        with_watch_monetization_types: 'free|ads',
        watch_region: 'US',
        sort_by: 'popularity.desc',
      },
    });
  }

  getForRentMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/discover/movie`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
      params: {
        with_watch_monetization_types: 'rent|buy',
        watch_region: 'US',
        sort_by: 'popularity.desc',
      },
    });
  }

  getInTheatersMovies() {
    return this.http.get<MovieResponse>(`${environment.tmdbBaseUrl}/movie/now_playing`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getMovieVideos(movieId: number) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/movie/${movieId}/videos`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getFreeToWatchMovies(mediaType: 'movie' | 'tv' = 'movie') {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/discover/${mediaType}`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
      params: {
        with_watch_monetization_types: 'free',
        watch_region: 'US',
        sort_by: 'popularity.desc',
      },
    });
  }

  SearchMovies(query: string) {
    return this.http.get(`${environment.tmdbBaseUrl}/search/movie`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
      params: { query },
    });
  }

}
