"use client";

import Header from "@/components/Header";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { MovieList } from "@/components/movie-list";
import { useEffect, useState } from "react";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="container mx-auto px-4 py-8">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <MovieList />
      <ScrollToTopButton />
    </main>
  );
}
