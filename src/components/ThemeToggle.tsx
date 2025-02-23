import { useState } from "react";

import clsx from "clsx";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  // Relies on a script to load the theme before page load
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme: () => void = () => {
    setTheme((prev) => {
      const newTheme: ("light" | "dark") = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  return (
    <button
      className={clsx(
        "fixed right-6 bottom-6 w-12 h-12 cursor-pointer rounded-2xl",
        className
      )}
      onClick={toggleTheme}
    >
      {theme === "light" ? <p>SD</p> : <p>SL</p>}
    </button>
  )
}

