"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { useDebounce } from "@/app/lib/hooks/useDebounce";
import { usePlacesQuery } from "../hooks/usePlacesQuery";
import { usePlacesStore } from "../store";
import type { Place } from "@/features/places/schemas";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

type Props = {
  open: boolean;
  handleClose: () => void;
  placeholder?: string;
  heading?: string;
  minChars?:number;
};

export default function DialogWrapper({
  open,
  handleClose,
  placeholder = "Search destinations…",
  heading = "Destinations",
  minChars = 3,
}: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery, 300);
  const [sessionToken, setSessionToken] = useState<string>(() =>
    crypto.randomUUID()
  );

  // reset session token when dialog closes or query emptied
  useEffect(() => {
    if (!open || searchQuery.trim() === "") {
      setSessionToken(crypto.randomUUID());
    }
  }, [open, searchQuery]);


  const { data, isPending, isError, error } = usePlacesQuery({
    query: debouncedQuery,
    sessionToken,
  });
  const { add, has } = usePlacesStore();

  const tooShort = searchQuery.trim().length < minChars;

  return (
    <CommandDialog open={open} onOpenChange={handleClose}>
      <CommandInput
        value={searchQuery}
        onValueChange={setSearchQuery}
        placeholder={placeholder}
      />
      <CommandList>
        <CommandEmpty>
          {tooShort
            ? `Type at least ${minChars} characters`
            : isPending
              ? "Searching…"
              : "No results found"}
        </CommandEmpty>

        {!tooShort && data && data?.places.length > 0 && (
          <CommandGroup heading={heading}>
            {data.places.map((item: Place) => (
              <CommandItem
                key={item.id}
                // cmdk’s onSelect gives the item's value string,
                // but we already have the object, so just call through.
                value={item.id}
                onSelect={() => {
                  if (!has(item.id)) add(item);
                  setSearchQuery("");
                  handleClose();
                }}
              >
                <div className="flex flex-col">
                  <span className="font-medium leading-none">{item.name}</span>
                  {item.secondaryText ? (
                    <span className="text-xs text-muted-foreground">
                      {item.secondaryText}
                    </span>
                  ) : null}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
