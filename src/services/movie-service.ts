import { IMovie } from "@/interfaces/movie";
import { MovieResponse } from "@/interfaces/movie-response";
import axios from "axios";

export const fetchMovies = async (pageParam = 1): Promise<MovieResponse> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movies?page=${pageParam}&limit=20`;
  const { data } = await axios.get(url);
  return data;
};

export const reIndexMovies = async (movies: IMovie[]) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movies/reindex`;
  const { data } = await axios.post(url, { movies });
  return data;
};

export const clearMovies = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movies/clear`;
  const { data } = await axios.delete(url);
  return data;
};
