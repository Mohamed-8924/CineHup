export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface LeaderboardUser {
  id: number;
  name: string;
  avatar: string;
  totalEdits: number;
  weeklyEdits: number;
  totalPercentage: number; // طول شريط التقدم بتاع All Time (كنسبة %)
  weeklyPercentage: number; // طول شريط التقدم بتاع This Week (كنسبة %)
}
