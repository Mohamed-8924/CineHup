import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/user-layout/user-layout').then((c) => c.UserLayout),
    children: [
      { path: '', loadComponent: () => import('./pages/home/home').then((c) => c.Home) },
      { path: 'home', loadComponent: () => import('./pages/home/home').then((c) => c.Home) },
      {
        path: 'movies',
        loadComponent: () => import('./pages/movies/movies').then((c) => c.Movies),
      },
      {
        path: 'movies/:id',
        loadComponent: () =>
          import('./pages/movie-details/movie-details').then((c) => c.MovieDetails),
      },
      {
        path: 'tv-shows',
        loadComponent: () => import('./pages/tv-shows/tv-shows').then((c) => c.TVShows),
      },

      {
        path: 'favorites',
        loadComponent: () => import('./pages/favorites/favorites').then((c) => c.Favorites),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search-results/search-results').then((c) => c.SearchResults),
      },
    ],
  },
];
