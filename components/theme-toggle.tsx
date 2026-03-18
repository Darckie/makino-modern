"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const nextTheme =
      (document.documentElement.dataset.theme as Theme | undefined) || "light";
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("makino-theme", nextTheme);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <MoonStar size={16} /> : <SunMedium size={16} />}
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
