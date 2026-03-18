import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col justify-center py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
        {/* Left Heading */}
        <div className="text-left">
          <h2 className="font-boldonse text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.9]">
            Reach <br /> Out
          </h2>
        </div>

        {/* Right Form */}
        <div className="flex flex-col items-start lg:pl-12">
          <h3 className="font-boldonse text-3xl md:text-4xl text-white mb-16 max-w-md leading-tight">
            Tell me about your idea.
            <br />
            <span className="text-[#888]">I'll take it from there.</span>
          </h3>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl flex flex-col gap-8"
          >
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-[#333] py-4 text-white font-montserrat placeholder-gray-600 focus:outline-none focus:border-white transition-colors peer"
                required
              />
            </div>

            <div className="relative group">
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job title"
                className="w-full bg-transparent border-b border-[#333] py-4 text-white font-montserrat placeholder-gray-600 focus:outline-none focus:border-white transition-colors peer"
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent border-b border-[#333] py-4 text-white font-montserrat placeholder-gray-600 focus:outline-none focus:border-white transition-colors peer"
                required
              />
            </div>

            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={1}
                className="w-full bg-transparent border-b border-[#333] py-4 text-white font-montserrat placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none peer"
                required
              />
            </div>

            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="mt-8 px-10 py-5 bg-white text-black font-montserrat font-semibold text-sm rounded-full hover:bg-gray-200 transition-colors duration-300 self-start w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
