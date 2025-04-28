"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon} from "./SVG-components/sun";
import { MoonIcon } from "./SVG-components/moon";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
    <button
      className="p-2 border-2 rounded-full flex items-center justify-between w-14 bg-light-lightBg dark:bg-dark-191 dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Left Icon (Moon) for Light Theme */}
      <span className={theme === "light" ? "opacity-100" : "opacity-0"}>
        <MoonIcon />
      </span>

      {/* Right Icon (Sun) for Dark Theme */}
      <span className={theme === "dark" ? "opacity-100" : "opacity-0"}>
        <SunIcon />
      </span>

      {/* Transition animation */}
      <div
        className={`transition-all duration-300 transform ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        } w-6 h-6 bg-yellow-400 rounded-full`}
      />
    </button>
  </div>
  );
};

export default ThemeSwitch;