import { styles } from "../assets/styles";

function Contact() {
  return (
    <section
      id="contact"
      className="relative h-[60vh] lg:h-[80vh] text-center flex flex-col justify-around items-center"
    >
      <div className="flex justify-center items-center flex-col mb-8">
        <p className="text-xl ">How To</p>
        <h2 className=" text-5xl md:text-6xl lg:text-7xl font-bold">
          Contact Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around w-full md:w-[70%] pl-16 lg:pl-0 items-start gap-4 bg-white px-8 py-12 rounded-4xl shadow-lg ">
        <label className="flex justify-center items-center gap-4">
          <img
            className="h-10 w-auto lg:h-16"
            src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png"
            alt="email icon"
          />
          <a
            href="mailto:bosseaid2005@gmail.com"
            className={styles.contact.link}
          >
            bosssaid2005@gmail.com
          </a>
        </label>
        <label className="flex justify-start items-center gap-4">
          <img
            className="h-10 w-auto lg:h-16"
            src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
            alt="LinkedIn icon"
          />
          <a
            href="https://linkedin.com/in/sa%C3%AFd-fateh-1672a72b1/"
            className={styles.contact.link}
          >
            LinkedIn
          </a>
        </label>
      </div>
      <div className="flex flex-col gap-6">
        <div
          className="flex gap-4 lg:gap-12 text-xl lg:text-[1.7rem] "
        >
          <a href="#about" className={styles.profile.navLink}>
            About
          </a>
          <a href="#projects" className={styles.profile.navLink}>
            Projects
          </a>
          <a href="#experiences" className={styles.profile.navLink}>
            Experiences
          </a>
          <a href="#contact" className={styles.profile.navLink}>
            Contact
          </a>
        </div>
        <p className="lg:text-xl text-gray-500 whitespace-nowrap ">
          Copyright &copy; 2025 Said Fateh. All rights observed.
        </p>
      </div>
    </section>
  );
}

export default Contact;
