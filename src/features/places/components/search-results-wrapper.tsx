// ...existing code...
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import DialogWrapper from "./dialog-wrapper";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { useFocusShortcut } from "@/app/lib/hooks/useFocusShortcut";

const SearchResultsWrapper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useFocusShortcut(inputRef, "k");

  const isMac =
    typeof window !== "undefined" &&
    /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);

  return (
    <div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search destinations..."
            onFocus={() => setIsOpen(true)}
            className="pl-11 h-14 text-lg"
            readOnly
          />
          <span className="hidden md:block text-secondary-foreground/50 text-xs mt-1">
            {isMac ? "⌘ K" : "Ctrl K"}
          </span>
        </div>
      </form>

      <DialogWrapper
        open={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default SearchResultsWrapper;