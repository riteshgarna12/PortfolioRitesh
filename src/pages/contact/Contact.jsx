import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/riteshgarna12@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSent(false), 4000);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative px-5 md:px-8 font-['Montserrat_Alternates'] text-[var(--text-color)] dark:text-[var(--text-color)]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--body-color)] via-[var(--container-color)] to-[var(--body-color)] -z-10"></div>

      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold font-['Tenor_Sans'] mb-10 text-[var(--title-color)] dark:text-[var(--title-color)]">
        Contact <span className="text-[var(--first-color)]">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Social Links Card */}
        <div className="w-full md:w-1/3 bg-[var(--container-color)] dark:bg-[var(--container-color)] shadow-md rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-[var(--title-color)] dark:text-[var(--title-color)] text-lg font-semibold">
            Let’s connect!
          </p>
          <div className="flex gap-6 justify-center text-2xl text-[var(--first-color)]">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:avanibhardwaj30@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-[var(--text-color)] dark:text-[var(--text-color)]">
            Feel free to drop me a message or just say hello!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 bg-[var(--container-color)] shadow-md rounded-2xl p-8 space-y-6"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-[var(--title-color)] dark:text-[var(--title-color)]">
                Your Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--first-color)] focus:border-[var(--first-color)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-[var(--title-color)] dark:text-[var(--title-color)]">
                Your Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--first-color)] focus:border-[var(--first-color)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-[var(--title-color)] dark:text-[var(--title-color)]">
              Your Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              autoComplete="off"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--first-color)] focus:border-[var(--first-color)]"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-[var(--title-color)] dark:text-[var(--title-color)]">
              Your Subject *
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--first-color)] focus:border-[var(--first-color)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-[var(--title-color)] dark:text-[var(--title-color)]">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--first-color)] focus:border-[var(--first-color)]"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--first-color)] hover:bg-[var(--first-color-alt)] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--first-color-alt)]"
            >
              <FaPaperPlane className="text-sm" /> Send Message
            </button>
          </div>

          {sent && (
            <p className="text-center text-[var(--first-color)] font-semibold mt-4 animate-pulse">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
      <br />
    </section>
  );
}

export default Contact;
