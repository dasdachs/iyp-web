import React from "react";
import { Button } from "@iyp/components/Button";
import { Typography } from "@iyp/components/Typography";
import Image from "next/image";

interface SuggestionsProps {
  suggestions: { name: string; image: string; tag?: string }[];
}

export function Suggestions({ suggestions }: SuggestionsProps) {
  return (
    <section className="p-6">
      <Typography type="h4" className="mb-8">
        Connected Venues
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {suggestions.map((venue) => (
          <div key={venue.name} className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image src={venue.image} alt={venue.name} className="w-full h-72 object-cover" width="300" height="300" />
              <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded">
                <Typography type="button-link-small">{venue.tag ?? "Venue"}</Typography>
              </span>
            </div>
            <div className="p-4">
              <Typography type="b2">{venue.name}</Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button size="normal" text="Load more" />
      </div>
    </section>
  );
}
