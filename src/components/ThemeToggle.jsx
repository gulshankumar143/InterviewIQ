"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("interviewapp-theme");
    const preferredTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    const nextTheme = preferredTheme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    setIsDark(nextTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("interviewapp-theme", nextTheme);
    setIsDark(nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-indigo-500/60 dark:hover:text-indigo-300"
    >
      {mounted ? (
        <span className="text-lg leading-none">{isDark ? "☀️" : "🌙"}</span>
      ) : (
        <span className="text-lg leading-none">🌙</span>
      )}
    </button>
  );
}
