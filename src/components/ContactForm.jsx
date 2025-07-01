// components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <form
  action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
  method="POST"
  className="bg-[#121633] p-6 rounded-xl shadow-md space-y-4 w-full max-w-md border border-gray-700"
>
  <h3 className="text-green-400 text-xl font-semibold mb-2">Send a Message</h3>

  <div className="flex gap-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="flex-1 p-2 rounded bg-[#1c1f3a] text-white"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="flex-1 p-2 rounded bg-[#1c1f3a] text-white"
    />
  </div>

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
    className="w-full p-2 rounded bg-[#1c1f3a] text-white"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    required
    className="w-full p-2 rounded bg-[#1c1f3a] text-white h-32 resize-none"
  />

  <button
    type="submit"
    className="w-full py-2 rounded bg-green-400 text-black font-semibold hover:scale-105 transition shadow-glow"
  >
    Send Message
  </button>


</form>

  );
};

export default ContactForm;
