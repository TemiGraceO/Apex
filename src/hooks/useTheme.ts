import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// index.html sets data-bs-theme before the page paints, so read it back from there
function getInitialTheme(): Theme {
  const current = document.documentElement.getAttribute("data-bs-theme");
  if (current === "dark" || current === "light") return current;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    // Only save the choice once the visitor makes one, otherwise follow their system setting
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable, the choice just won't persist */
    }
  };

  return { theme, toggle };
}