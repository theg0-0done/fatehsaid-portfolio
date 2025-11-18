import { projects } from "../assets/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectsElements = projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        image={project.image_path}
        title={project.title}
        description={project.description}
        link={project.link}
        github_repo={project.github_repo}
      />
    );
  });

  return (
    <section id="projects" className="relative min-h-screen text-center ">
      <div className="flex flex-col mb-8">
        <p className="text-xl ">Check Out My</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Real-World Projects
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center lg:justify-evenly gap-12 mb-8 lg:flex-wrap lg:flex-row">
        {projectsElements}
      </div>
      <a href="#experiences" className="absolute bottom-0 right-6 h-14 w-14 ">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1665/1665586.png"
          alt="down arrow icon"
        />
      </a>
    </section>
  );
}

export default Projects;
