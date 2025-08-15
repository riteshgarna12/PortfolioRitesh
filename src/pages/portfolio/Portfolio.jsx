import { portfolio } from "../../Data";

function Portfolio() {
  return (
    <main
      id="projects"
      className="py-12 px-4 md:px-8 max-w-6xl mx-auto font-['Montserrat_Alternates'] bg-[var(--body-color)] text-[var(--text-color)]"
    >
      {/* Section Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold font-['Tenor_Sans'] mb-8 text-[var(--title-color)]">
        My <span className="text-[var(--first-color)]">Projects</span>
      </h2>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map(({ id, img, title, description, skills, link }) => (
          <div
            key={id}
            className="bg-[var(--container-color)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-36 w-full">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3 flex-grow">
              {/* Title & Description */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[var(--title-color)]">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-color)]">
                  {description}
                </p>
              </div>

              {/* Skills badges */}
              {skills.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--first-color)]/10 p-1"
                    >
                      <img
                        src={skill}
                        alt={`skill-${idx}`}
                        className="w-full h-full object-contain"
                      />
                    </span>
                  ))}
                </div>
              )}

              {/* View Button */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-block w-fit bg-[var(--first-color)] hover:bg-[var(--first-color-alt)] text-white px-3 py-1 rounded-full text-xs font-semibold transition duration-300"
                >
                  View →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Portfolio;
