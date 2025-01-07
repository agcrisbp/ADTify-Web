import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);

    if (savedTheme === "system") {
      const interval = setInterval(applySystemTheme, 1000);
      return () => clearInterval(interval);
    } else {
      applyTheme(savedTheme);
    }
  }, [theme]);

  const applyTheme = (theme: string) => {
    document.body.classList.toggle("dark", theme === "dark");
  };

  const applySystemTheme = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark", prefersDark);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    newTheme === "system" ? applySystemTheme() : applyTheme(newTheme);
  };

  return (
    <nav className="fixed bottom-6 right-6 flex justify-center items-center font-bold z-50">
      <button onClick={toggleTheme} className="flex items-center gap-2 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all">
        <Icon icon={theme === "dark" ? "solar:moon-outline" : theme === "light" ? "solar:sun-outline" : "solar:laptop-bold"} width={20} height={20} />
        <span className="hidden md:block">{theme === "dark" ? "Dark Mode" : theme === "light" ? "Light Mode" : "System Mode"}</span>
      </button>
    </nav>
  );
}