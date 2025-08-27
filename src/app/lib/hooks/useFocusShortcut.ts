"use client";
import { useEffect } from "react";

export function useFocusShortcut(
  ref: React.RefObject<HTMLInputElement | null>,
  key: string = "k"
) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const modifierKeyPrefix =
        navigator.userAgent.startsWith("Mac") ||
        navigator.userAgent === "iPhone"
          ? "⌘" // command key
          : "^"; // control key
      const keyPressed = e.key.toLowerCase() === key.toLowerCase();
      if (
        (keyPressed && modifierKeyPrefix && e.metaKey) ||
        (!modifierKeyPrefix && e.ctrlKey)
      ) {
        e.preventDefault();
        ref.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, key]);

  return ref;
}
