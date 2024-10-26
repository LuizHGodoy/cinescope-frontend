"use client";

import Image from "next/image";
import React from "react";

interface Movie {
  tmdbId: number;
  title: string;
  posterPath: string;
}

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-md h-[90%]">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.posterPath}`}
        alt={movie.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h2 className="text-white text-sm font-semibold truncate">
            {movie.title}
          </h2>
        </div>
      </div>
    </div>
  );
};
