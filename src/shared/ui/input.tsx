"use client";

import { useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey || (e.metaKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative items-center flex">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="max-w-20 md:max-w-xs placeholder:hidden md:placeholder:inline"
      />
      <span className="hidden md:block text-secondary-foreground/50 absolute right-2 text-xs">
        Ctrl K
      </span>
    </div>
  );
};

export default SearchInput;
