"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      href: "/interviewee",
      label: "Interviewee",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      href: "/interviewer",
      label: "Interviewer",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/80 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm shadow-slate-200/60 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/25 transition-transform duration-200 group-hover:scale-105">
            IQ
          </div>
          <div className="hidden sm:block">
            <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              InterviewIQ
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              AI-Powered Interviews
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-white/70 p-1.5 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/70">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 shadow-sm dark:from-indigo-500/20 dark:to-blue-500/20 dark:text-indigo-200"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
