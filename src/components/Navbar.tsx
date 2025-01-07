import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const userTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(userTheme);
    if (userTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed bottom-6 right-6 flex justify-center items-center font-bold z-50">
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all"
      >
        <Icon icon={theme === "dark" ? "solar:moon-outline" : "solar:sun-outline"} width={20} height={20} />
        <span className="hidden md:block">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </nav>
  );
}