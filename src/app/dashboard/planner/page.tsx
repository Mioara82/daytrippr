"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { useFocusShortcut } from "@/shared/lib/hooks/useFocusShortcut";

const Planner = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  useFocusShortcut(inputRef, "k");

  const isMac =
    typeof window !== undefined &&
    /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Page title */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold">Where would you like to go?</h1>
          <p className="text-muted-foreground">
            Search for a destination to start planning your perfect day trip
          </p>
        </div>

        {/* Search form */}
        <form className="space-y-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-14 text-lg"
            />
            <span className="hidden md:block text-secondary-foreground/50 text-xs mt-1">
              {isMac ? "⌘ K" : "Ctrl K"}
            </span>
          </div>
          <Button type="submit" size="lg" variant="link" className="w-full h-12">
            Search Destinations
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Planner;
