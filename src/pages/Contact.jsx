import React from "react";
import socials from "../data/socials.jsx";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-8 px-6 text-white bg-[#0f1123]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Get In <span className="text-green-400 drop-shadow-glow">Touch</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto">
        {/* Left side: text + icons */}
        <div className="space-y-5 max-w-md">
          <h3 className="text-2xl text-blue-400 font-semibold">Let's Connect!</h3>
          <p className="text-gray-300 leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, or just chat about technology.
            Whether you have a project in mind or want to connect professionally, I’d love to hear from you!
          </p>

          <div className="space-y-3">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400 transition-transform hover:scale-105"
              >
                <div className="bg-[#1c1f3a] p-2 rounded-md text-xl">
                  {item.icon()}
                </div>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right side: form */}
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Rohini. Designed with purpose, built with precision.
          <br />
          Made with <span className="text-green-400">React</span>, <span className="text-blue-400">Tailwind</span>, and a dash of 💡 & ☕
        </p>
      </footer>
    </section>
  );
};

export default Contact;
