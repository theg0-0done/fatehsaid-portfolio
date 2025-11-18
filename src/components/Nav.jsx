import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { styles } from "../assets/styles";

function Nav() {
  const { open, setOpen } = useContext(PortfolioContext);

  return (
    <div className={styles.profile.navbar}>
      <h2 className="text-4xl md:text-5xl ">
        Said <span className="font-bold ">Fateh</span>
      </h2>
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 w-9 md:w-10 cursor-pointer lg:hidden"
      >
        <span
          className={`${styles.profile.hamSpan} duration-300 ${open && "rotate-45 translate-y-2.5"}`}
        ></span>
        <span
          className={`${styles.profile.hamSpan} duration-300 ${open ? "opacity-0 " : ""}`}
        ></span>
        <span
          className={`${styles.profile.hamSpan} duration-600 ${open && "-rotate-225 -translate-y-2.5"}`}
        ></span>
      </div>
      <div className="hidden lg:flex gap-8 text-[1.7rem] ">
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
    </div>
  );
}

export default Nav;
