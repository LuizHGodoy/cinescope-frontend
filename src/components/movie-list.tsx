"use client";

import { useMovies } from "@/hooks/useMovies";
import { clearMovies, reIndexMovies } from "@/services/movie-service";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ConfirmationDialog from "./confirmation-dialog";
import { MovieCard } from "./movie-card";

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
  } = useMovies();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  const handleReIndexMovies = async () => {
    if (!data) return;

    await reIndexMovies(data.pages.flatMap((page) => page.movies));
  };

  const handleClearMovies = async () => {
    await clearMovies();
    setIsDialogOpen(false);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {(error as Error).message}</p>;

  return (
    <div key="movie-list">
      <div className="flex justify-between mb-4">
        <button
          onClick={handleReIndexMovies}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Reindex Movies
        </button>
        <button
          onClick={handleOpenDialog}
          className="bg-red-500 text-white p-2 rounded"
        >
          Clear Movies
        </button>
      </div>

      {data?.pages.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.pages.map((page: any) =>
            page.data.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            )),
          )}
        </div>
      )}

      <div ref={ref} className="flex justify-center mt-4">
        {isFetchingNextPage && "Loading more..."}
      </div>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleClearMovies}
      />
    </div>
  );
}
