import { effect, Service, signal } from '@angular/core';

export interface FavoriteMovie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  vote_average: number;
  release_date: number;
  overview: string;
}

@Service()
export class FavoritesMovieService {
  favorites = signal<FavoriteMovie[]>([]);

  constructor() {
    const savedData = localStorage.getItem('favorite_movies');

    if (savedData) {
      this.favorites.set(JSON.parse(savedData));
    }

    effect(() => {
      localStorage.setItem('favorite_movies', JSON.stringify(this.favorites()));
    });
  }

  toggleFavorite(movie: FavoriteMovie) {
    const currentList = this.favorites(); 
    const isExist = currentList.some((item) => item.id === movie.id);

    if (isExist) {
      this.favorites.set(currentList.filter((m) => m.id !== movie.id));
    } else {
      this.favorites.set([...currentList, movie]);
    }
  }

  isFavorite(movieId: number): boolean {
    return this.favorites().some((m) => m.id === movieId);
  }
}
