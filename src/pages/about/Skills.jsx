import { skill } from "../../Data";
import { useState } from "react";

function Skills() {
  const [category, setCategory] = useState("developer");
  const filteredSkills = skill.filter((item) => item.category === category);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-[var(--title-color)]">
        My Skills
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        {["developer", "langauge"].map((type) => (
          <button
            key={type}
            onClick={() => setCategory(type)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              category === type
                ? "bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-alt)] text-white shadow-md"
                : "border border-[var(--first-color)] text-[var(--first-color)] hover:bg-[var(--first-color)] hover:text-white"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredSkills.map(({ id, title, level, img }) => (
          <div
            key={id}
            className="bg-gradient-to-br from-[var(--container-color)] to-[var(--body-color)] border border-[var(--border-color)] rounded-lg p-4 shadow hover:shadow-lg transition hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--body-color)] text-[var(--first-color)] text-xl font-bold mb-3">
              {img ? (
                <img
                  src={img}
                  alt={title}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                title[0]
              )}
            </div>
            <h4 className="text-[var(--title-color)] font-semibold text-sm mb-1">
              {title}
            </h4>
            <p className="text-xs text-[var(--text-color)]">{level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
