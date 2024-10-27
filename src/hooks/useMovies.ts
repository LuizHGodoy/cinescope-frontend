import { fetchMovies } from "@/services/movie-service";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMovies = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => fetchMovies(pageParam),
    getNextPageParam: (lastPage: any) => {
      const totalPages = lastPage.totalPages;
      const currentPage = lastPage.page;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
