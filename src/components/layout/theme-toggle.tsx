"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if(initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    if(newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full bg-card p-2 text-foreground shadow-md transition-colors hover:bg-muted"
      aria-pressed={theme === "dark"}
      title="Alternar tema"
    >
      <Sun className={`h-6 w-6 ${theme === "light" ? "block" : "hidden"}`} />
      <Moon className={`h-6 w-6 ${theme === "dark" ? "block" : "hidden"}`} />
    </button>
  );
}
