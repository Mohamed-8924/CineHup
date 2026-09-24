import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Service()
export class TvService {
  private http = inject(HttpClient);

  getPopularTv() {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/popular`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getAiringTodayTv() {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/airing_today`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getOnTv() {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/on_the_air`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getTopRatedTv() {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/top_rated`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }
  ///////////////

  getTvDetails(id: string) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/${id}`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getTvCredits(id: string) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/${id}/credits`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  getTvVideos(id: string | number) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/${id}/videos`, {
      headers: { Authorization: `Bearer ${environment.tmdbReadAccessToken}` },
    });
  }

  // 2. دالة جلب المسلسلات بالفلاتر
  discoverTvShows(filters: any) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/discover/tv`, {
      headers: {
        Authorization: `Bearer ${environment.tmdbReadAccessToken}`,
      },
      params: filters,
    });
  }

  getTVDetails(id: string) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/${id}`, {
      headers: {
        Authorization: `Bearer ${environment.tmdbReadAccessToken}`,
      },
    });
  }

  geTvRecommendations(id: string) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/{id}/recommendations`, {
      headers: {
        Authorization: `Bearer ${environment.tmdbReadAccessToken}`,
      },
    });
  }

  getTvKeywords(id: string) {
    return this.http.get<any>(`${environment.tmdbBaseUrl}/tv/${id}/keywords`, {
      headers: {
        Authorization: `Bearer ${environment.tmdbReadAccessToken}`,
      },
    });
  }

  discoverTvByKeyword(keywordId: string) {
    // ببعت الـ id بتاع الكلمة في بارامتر اسمه with_keywords
    return this.http.get<any>(`${environment.tmdbBaseUrl}/discover/tv?with_keywords=${keywordId}`, {
      headers: {
        Authorization: `Bearer ${environment.tmdbReadAccessToken}`,
      },
    });
  }
}
