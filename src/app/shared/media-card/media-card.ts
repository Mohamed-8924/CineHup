import { Component, inject, input, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesMovieService } from '../../core/services/favorites';

@Component({
  selector: 'app-media-card',
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './media-card.html',
  styleUrl: './media-card.scss',
})
export class MediaCard {
  public favoritesService = inject(FavoritesMovieService);

  item = input.required<any>();

  displayTitle = computed(() => this.item()?.title || this.item()?.name || '');
  displayDate = computed(() => this.item()?.release_date || this.item()?.first_air_date || '');
  mediaType = computed(() => (this.item()?.title ? 'movies' : 'tv-shows'));

  isFavs = computed(() => this.favoritesService.isFavorite(this.item()?.id));

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(this.item());
  }
}
