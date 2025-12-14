import { experiences } from "../assets/experiences";
import { styles } from "../assets/styles";

function Experiences() {
  const frontendElements = experiences.frontend.map((experience) => (
    <div
      key={experience.id}
      className={styles.experiences.languageElement}
    >
      <img
        src={experience.icon}
        alt={`${experience.name} icon`}
        className="h-6 w-6 lg:h-16 lg:w-16 "
      />
      <div className={styles.experiences.languageInfo}>
        <h4 className={styles.experiences.language}>
          {experience.name}
        </h4>
        <p className="md:text-[1rem] opacity-90 ">{experience.level}</p>
      </div>
    </div>
  ));

  const backendElements = experiences.backend.map((experience) => (
    <div
      key={experience.id}
      className={styles.experiences.languageElement}
    >
      <img
        src={experience.icon}
        alt={`${experience.name} icon`}
        className="h-6 w-6 lg:h-16 lg:w-16 "
      />
      <div className={styles.experiences.languageInfo}>
        <h4 className={styles.experiences.language}>
          {experience.name}
        </h4>
        <p className="md:text-xl opacity-90 ">{experience.level}</p>
      </div>
    </div>
  ));

  return (
    <section
      id="experiences"
      className="relative min-h-screen text-center flex flex-col justify-evenly items-center "
    >
      <div className="flex justify-center items-center flex-col mb-8">
        <p className="text-xl ">Explore My</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Experiences
        </h2>
      </div>
      <div className="flex max-sm:justify-between sm:justify-evenly items-stretch h-[70vh] xl:h-full w-full whitespace-nowrap">
        <div className={styles.experiences.container}>
          <h2 className={styles.experiences.title}>
            Front-end
          </h2>
          {frontendElements}
        </div>
        <div className={styles.experiences.container}>
          <h2 className={styles.experiences.title}>
            Back-end
          </h2>
          {backendElements}
        </div>
      </div>
      <a href="#contact" className="absolute bottom-0 right-6 h-14 w-14">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1665/1665586.png"
          alt="down arrow icon"
        />
      </a>
    </section>
  );
}

export default Experiences;
