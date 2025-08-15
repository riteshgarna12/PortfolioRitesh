import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import ThemeToggle from "../themes/ThemeToggle";
import { links } from "../../Data";

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-[var(--container-color)] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-[var(--first-color)] tracking-wider font-['Tenor_Sans']">
          Ritesh
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-end flex-1">
          <nav className="flex gap-8 mr-6">
            {links.map(({ name, path, icon }, index) => (
              <a
                key={index}
                href={path}
                className="relative flex items-center gap-2 text-sm font-medium transition duration-300 text-[var(--title-color)] hover:text-[var(--first-color)]"
              >
                <span className="text-lg">{icon}</span>
                {name}
              </a>
            ))}
          </nav>

          {/* Theme toggle */}
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--title-color)] p-2 hover:text-[var(--first-color)] transition"
          >
            {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-[68px] right-0 w-full bg-[var(--container-color)]
          flex flex-col items-center gap-6 py-8 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        {links.map(({ name, path, icon }, index) => (
          <a
            key={index}
            href={path}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-semibold transition text-[var(--title-color)] hover:text-[var(--first-color)]"
          >
            <span className="text-xl">{icon}</span>
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
