"use client";

import { MovieList } from "@/components/movie-list";

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Infinite Movie Scroll</h1>
      <MovieList />
    </main>
  );
}
