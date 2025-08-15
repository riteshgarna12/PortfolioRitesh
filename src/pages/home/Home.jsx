import Profile from "../../assets/ritesh.jpeg";
import { RiArrowRightLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import riteshPdf from "./riteshResume1.pdf";

function Home() {
  return (
    <section
    className="
        relative
        min-h-[calc(100vh-64px)]  /* full height minus navbar */
        flex flex-col justify-center items-center
        px-5 sm:px-8 lg:px-16
        pt-16 pb-10
        bg-[var(--body-color)]
        text-[var(--text-color)]
        font-['Montserrat_Alternates']
        transition-colors duration-500
    "
    >

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--first-color)]/10 to-transparent -z-10"></div>

      <div
        className="
          grid grid-cols-1 lg:grid-cols-2
          gap-16
          items-center
          w-full
          max-w-7xl
        "
      >
        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group w-full max-w-[400px]">
            <img
              src={Profile}
              alt="Ritesh"
              className="
                w-full h-auto object-cover rounded-3xl
                transition-transform duration-700 group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-[var(--container-color)]/20 dark:bg-[var(--container-color)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center lg:text-left space-y-8">
          <h1
            className="
              text-[2.5rem] sm:text-[3rem] lg:text-[3.75rem]
              font-extrabold
              font-['Tenor_Sans']
              text-[var(--title-color)]
              leading-tight
            "
          >
            <span className="text-[var(--first-color)]">I&apos;m Ritesh,</span> <br />
            Web Designer
          </h1>

          <p className="max-w-xl text-[var(--text-color)] text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
            I craft clean and modern websites that are not only aesthetically
            pleasing but also optimized for user experience and performance.
            Eager-to-learn programmer passionate about problem-solving, exploring new tech, and turning ideas into impactful projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col xl:justify-start sm:flex-row sm:justify-evenly gap-4 justify-center">
            <a
                href="#about"
                className="
                    inline-flex items-center justify-center
                    px-8 py-4
                    text-sm font-semibold
                    rounded-full
                    border border-[var(--first-color)]
                    text-[var(--title-color)]
                    hover:bg-[var(--first-color)]
                    hover:text-white
                    transition-colors duration-300
                "
                >
                More About Me
                <span className="ml-3 text-xl text-[var(--first-color)] group-hover:text-white transition">
                    <RiArrowRightLine />
                </span>
            </a>
            <a
              href={riteshPdf}
              download="riteshResume1.pdf"
              className="
                inline-flex items-center justify-center
                px-8 py-4
                text-sm font-semibold
                rounded-full
                bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-alt)]
                text-white
                hover:scale-105
                transition
              "
            >
              <FaDownload className="mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
