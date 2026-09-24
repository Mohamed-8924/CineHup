import { Component, computed, inject, signal } from '@angular/core';
import { FavoritesMovieService } from '../../core/services/favorites';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  public favoritesService = inject(FavoritesMovieService);

  activeTap = signal('movie');

  filterFavorite = computed(() => {
    const allFavorite = this.favoritesService.favorites();

    if (this.activeTap() === 'movie') {
      return allFavorite.filter((item) => item.title);
    } else {
      return allFavorite.filter((item) => item.name);
    }
  });

  movieCount = computed(
    () => this.favoritesService.favorites().filter((item) => item.title).length,
  );

  tvCount = computed(() => this.favoritesService.favorites().filter((item) => item.name).length);
}
