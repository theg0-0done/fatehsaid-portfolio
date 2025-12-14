import { styles } from "../assets/styles";

function ProjectCard(props) {
  return (
    <div className="group w-[90%] md:w-[80%] lg:w-[46%] xl:w-[40%] flex flex-col justify-center items-center text-center gap-6 pb-4 bg-gray-200 hover:shadow-xl hover:scale-101 rounded-3xl transition-all duration-300 ease-in-out shadow-lg ">
      <div className="relative flex justify-center items-center">
        <img
          className="rounded-t-2xl w-full "
          src={props.image}
          alt={`${props.title} image`}
        />
        <p className="absolute hidden lg:flex justify-center items-end pb-5 xl:pb-12 font-semibold text-xl bottom-0 w-full h-full overflow-hidden opacity-0 group-hover:opacity-100 bg-linear-to-b from-black/0 to-black text-white text-[1.2rem] transition-all duration-800 ease-in-out">
          {props.description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h3 className="text-3xl font-semibold ">{props.title}</h3>
        <p className="text-[1rem] w-[90%] lg:hidden ">{props.description}</p>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <a
          href={props.github_repo}
          className={styles.profile.resumeBtn}
        >
          <button>GitHub Repo</button>
        </a>
        <a
          href={props.link}
          className={styles.profile.contactBtn}
        >
          <button>Live Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
