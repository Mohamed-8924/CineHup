import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie';

@Component({
  selector: 'app-search-results',
  imports: [],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss',
})
export class SearchResults implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);

  query = signal('');
  results = signal<any[]>([]);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const q = params['query'];
      this.query.set(q);
      if (q) {
        this.movieService.SearchMovies(q).subscribe((res: any) => {
          this.results.set(res.results);
        });
      }
    });
  }
}
