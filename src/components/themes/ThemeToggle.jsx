import { RiSunLine, RiMoonLine } from "react-icons/ri";

function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="
        flex items-center justify-center
        w-10 h-10
        rounded-full
        bg-[var(--first-color)] 
        hover:bg-[var(--first-color-alt)]
        text-white
        transition-all duration-300
        shadow-md hover:shadow-lg
      "
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
    >
      {darkMode ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
    </button>
  );
}

export default ThemeToggle;
