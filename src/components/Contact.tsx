import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "./LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    
    setStatus("sending");

    // TODO: Replace these placeholders with your actual EmailJS credentials
    const serviceID = "service_hx0j6fs";
    const templateID = "template_f0n1bqa";
    const publicKey = "BPS3oCGZ3pbQi2m6R";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col justify-center py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
        {/* Left Heading */}
        <div className="text-left">
          <h2 className="font-boldonse text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.9]">
            {t('contact.heading')} <br /> {t('contact.heading2')}
          </h2>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-12">
            <a
              href="https://www.facebook.com/profile.php?id=100056490023321"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href="https://instagram.com/theg0_0d1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="https://wa.me/212762895481"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a
              href="mailto:contact@fatehsaid.com"
              aria-label="Email"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a
              href="https://github.com/theg0-0done"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col items-start lg:pl-12 min-h-[500px]">
          <h3 className="font-boldonse text-3xl md:text-4xl text-white mb-16 max-w-md leading-tight">
            {t('contact.subheading')}
            <br />
            <span className="text-[#888]">{t('contact.subheading2')}</span>
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-xl flex flex-col flex-1"
          >
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.name')}
                className="w-full bg-transparent border-b border-[#333] py-4 text-white font-montserrat placeholder-gray-600 focus:outline-none focus:border-white transition-colors peer"
                required
              />
            </div>

            <div className="relative group mt-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.email')}
                className="w-full bg-transparent border-b border-[#333] py-4 text-white font-montserrat placeholder-gray-600 focus:outline-none focus:border-white transition-colors peer"
                required
              />
            </div>

            <div className="relative group mt-8 flex-1 flex flex-col">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.message')}
                className="w-full flex-1 bg-transparent border-b border-[#333] py-4 text-white font-montserrat placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none peer"
                style={{ minHeight: '160px' }}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-8 gap-4">
              {/* Status Message */}
              <div className="text-sm font-montserrat">
                {status === "success" && (
                  <span className="text-green-500">Message sent successfully! I'll get back to you soon.</span>
                )}
                {status === "error" && (
                  <span className="text-red-500">Oops! Failed to send. Please try again later.</span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="px-10 py-5 bg-white text-black font-montserrat font-semibold text-sm rounded-full hover:bg-gray-200 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed self-start w-auto"
              >
                {status === "sending" ? "Sending..." : t('contact.send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
