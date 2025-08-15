import { resume } from "../../Data";
import Skills from "./Skills";
import { RiGraduationCapFill, RiBriefcase4Fill } from "react-icons/ri";

const About = () => {
  const education = resume.filter((item) => item.category === "education");
  const experience = resume.filter((item) => item.category === "experience");

  return (
    <main className="max-w-7xl mx-auto px-4 space-y-8 bg-[var(--body-color)] text-[var(--text-color)] font-['Montserrat_Alternates']">
      {/* Header */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--title-color)]">
          About <span className="text-[var(--first-color)]">Me</span>
        </h2>
      </section>

      {/* Education */}
      <section className="space-y-12">
        <h3 className="text-3xl font-bold text-center text-[var(--title-color)]">
          Education
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-gradient-to-br from-[var(--container-color)] to-[var(--body-color)] border border-[var(--border-color)] rounded-xl p-6 shadow hover:shadow-2xl transition duration-300 min-h-[250px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[var(--first-color)] bg-[var(--first-color-alt)] p-3 rounded-full">
                  <RiGraduationCapFill size={24} />
                </span>
                <span className="text-sm text-[var(--text-color)]">
                  {item.year}
                </span>
              </div>
              <h4
                className="text-lg font-bold text-[var(--title-color)] mb-2"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="text-sm text-[var(--text-color)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-12">
        <h3 className="text-3xl font-bold text-center text-[var(--title-color)]">
          Experience
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-gradient-to-br from-[var(--container-color)] to-[var(--body-color)] border border-[var(--border-color)] rounded-xl p-6 shadow hover:shadow-2xl transition duration-300 min-h-[250px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[var(--first-color)] bg-[var(--first-color-alt)] p-3 rounded-full">
                  <RiBriefcase4Fill size={24} />
                </span>
                <span className="text-sm text-[var(--text-color)]">
                  {item.year}
                </span>
              </div>
              <h4
                className="text-lg font-bold text-[var(--title-color)] mb-2"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="text-sm text-[var(--text-color)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <Skills />
    </main>
  );
};

export default About;
