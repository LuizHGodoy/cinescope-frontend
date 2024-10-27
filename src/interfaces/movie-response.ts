import { IMovie } from "./movie";

export interface MovieResponse {
  movies: IMovie[];
  nextCursor: number | null;
}
