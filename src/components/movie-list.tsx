"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { MovieCard } from "./movie-card";

interface Movie {
  tmdbId: number;
  title: string;
  posterPath: string;
}

interface MovieResponse {
  movies: Movie[];
  nextCursor: number | null;
}

const fetchMovies = async ({ pageParam = 1 }): Promise<MovieResponse> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movies?page=${pageParam}&limit=20`;
  const { data } = await axios.get(url);

  return data;
};

export function MovieList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage: any) => {
      const totalPages = lastPage.totalPages;
      const currentPage = lastPage.page;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  const movieGrid = useMemo(
    () => (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.pages.map((page: any) =>
          page?.data?.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          )),
        )}
      </div>
    ),
    [data],
  );

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {(error as Error).message}</p>;

  return (
    <div key="movie-list">
      {movieGrid}
      <div ref={ref} className="flex justify-center mt-4">
        {isFetchingNextPage && "Loading more..."}
      </div>
    </div>
  );
}
