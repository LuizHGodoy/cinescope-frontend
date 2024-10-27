import { IMovie } from "./Movie";

export interface MovieResponse {
  movies: IMovie[];
  nextCursor: number | null;
}
