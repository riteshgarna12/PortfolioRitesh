import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className="
        min-h-screen
        bg-[var(--body-color)]
        text-[var(--text-color)]
        transition-colors duration-500
        font-['Montserrat_Alternates']
      "
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-[68px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
