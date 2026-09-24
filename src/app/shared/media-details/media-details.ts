import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie';
import { TvService } from '../../core/services/tv-service';
import { FavoritesMovieService } from '../../core/services/favorites';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media-details',
  imports: [CommonModule],
  templateUrl: './media-details.html',
  styleUrl: './media-details.scss',
})
export class MediaDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  private tvService = inject(TvService);
  public favoritesService = inject(FavoritesMovieService);
  private sanitizer = inject(DomSanitizer);

  mediaDetails = signal<any>(null);
  mediaType = signal<'movie' | 'tv'>('movie');
  cast = signal<any[]>([]);
  recommendations = signal<any[]>([]);
  keywords = signal<any[]>([]);
  activeKeywordId = signal<string | null>(null);
  sectionTitle = signal('Recommendations');
  trailerKey = signal<string | null>(null);
  isTrailerOpen = signal(false);

  safeTrailerUrl = computed(() => {
    const key = this.trailerKey();
    return key
      ? this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${key}?autoplay=1`,
        )
      : null;
  });

  displayTitle = computed(() => this.mediaDetails()?.title || this.mediaDetails()?.name || '');
  displayDate = computed(
    () => this.mediaDetails()?.release_date || this.mediaDetails()?.first_air_date || '',
  );

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    const isMovie = this.route.snapshot.url[0].path === 'movies';

    this.mediaType.set(isMovie ? 'movie' : 'tv');

    if (isMovie) {
      this.movieService.getMovieDetails(id).subscribe((res) => {
        this.mediaDetails.set(res);
      });
      this.movieService.getMovieCredits(id).subscribe((res) => {
        this.cast.set(res.cast.slice(0, 15));
      });
      this.movieService.getMovieRecommendations(id).subscribe((res) => {
        this.recommendations.set(res.results.slice(0, 10));
      });
      this.movieService.getMovieKeywords(id).subscribe((res) => {
        this.keywords.set(res.keywords.slice(0, 15));
      });
      this.movieService.getMovieVideos(id).subscribe((res) => {
        const trailer = res.results.find((v: any) => v.site === 'YouTube' && v.type === 'Trailer');
        if (trailer) this.trailerKey.set(trailer.key);
      });
    } else {
      this.tvService.getTvDetails(id).subscribe((res) => {
        this.mediaDetails.set(res);
      });
      this.tvService.getTvCredits(id).subscribe((res) => {
        this.cast.set(res.cast.slice(0, 15));
      });
      this.tvService.geTvRecommendations(id).subscribe((res) => {
        this.recommendations.set(res.results.slice(0, 10));
      });
      this.tvService.getTvKeywords(id).subscribe((res) => {
        this.keywords.set(res.results.slice(0, 15));
      });
      this.tvService.getTvVideos(id).subscribe((res) => {
        const trailer = res.results.find((v: any) => v.site === 'YouTube' && v.type === 'Trailer');
        if (trailer) this.trailerKey.set(trailer.key);
      });
    }
    this.loadInitialRecommendations();
  }

  loadInitialRecommendations() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    if (this.mediaType() === 'movie') {
      this.movieService.getMovieRecommendations(id).subscribe((res) => {
        this.recommendations.set(res.results.slice(0, 15));
      });
    } else {
      this.tvService.geTvRecommendations(id).subscribe((res) => {
        this.recommendations.set(res.results.slice(0, 15));
      });
    }
  }

  onKeywordClick(keywordId: string, keywordName: string) {
    if (this.activeKeywordId() === keywordId) {
      this.activeKeywordId.set(null);
      this.sectionTitle.set('Recommendations');
      this.loadInitialRecommendations();
      return;
    }
    // لو اختار كلمة جديدة، نأكتفها ونغير العنوان ونجيب الداتا بتاعتها
    this.activeKeywordId.set(keywordId);
    this.sectionTitle.set(`Movies Related to :${keywordName}`);

    if (this.mediaType() === 'movie') {
      this.movieService.discoverMoviesByKeyword(keywordId).subscribe((res) => {
        this.recommendations.set(res.results.slice(0, 15));
      });
    } else {
      this.tvService.discoverTvByKeyword(keywordId).subscribe((res) => {
        this.recommendations.set(res.results.slice(0, 15));
      });
    }
  }

  onToggleFavorite(media: any) {
    const favoriteItem = { ...media, title: this.displayTitle(), media_type: this.mediaType() };
    this.favoritesService.toggleFavorite(favoriteItem);
  }
}
