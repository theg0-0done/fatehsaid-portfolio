import profilePicture from "../assets/avatar.png";
import { styles } from "../assets/styles";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function Profile() {
  const { open } = useContext(PortfolioContext);

  return (
    <section className="min-h-[86vh] flex flex-col lg:flex-row justify-evenly items-center">
      <div
        className={`${styles.profile.hamList} ${
          open ? "top-0" : "-top-full"
        }`}
      >
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experiences">Experiences</a>
        <a href="#contact">Contact</a>
      </div>
      <img
        className={styles.profile.avatar}
        src={profilePicture}
        alt="profile picture"
      />
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl font-bold ">Hi! I am</p>
        <h1 className="text-6xl md:text-7xl font-bold ">Said Fateh</h1>
        <h4 className="text-2xl md:text-3xl ">Full-Stack Developer</h4>
        <div className="flex mt-6 gap-6">
          <button className={styles.resumeBtn}>
            <a href="https://fatehsaid.netlify.app/assests/resume.pdf">
              Download CV
            </a>
          </button>
          <button className={styles.contactBtn}>
            <a href="#contact">Make It Happen</a>
          </button>
        </div>
        <div className="flex mt-6 gap-8">
          <a href="https://linkedin.com/in/sa%C3%AFd-fateh-1672a72b1/">
            <img
              className="w-14 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/theg0-0done">
            <img
              className="w-14 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
              alt="GitHub"
            />
          </a>
          <a href="https://www.instagram.com/theg0_0d1">
            <img
              className="w-14 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-0 right-6 h-14 w-14 ">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1665/1665586.png"
          alt="down arrow icon"
        />
      </a>
    </section>
  );
}

export default Profile;
