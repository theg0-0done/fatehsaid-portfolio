import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import carRentalImg from '../assets/carrental.png';
import ausbildungSucheImg from '../assets/ausbildungsuche.png';
import datamgtImg from '../assets/datamgt.png';
import seqqayaImg from '../assets/seqqaya-restaurant.png';
import cinemaImg from '../assets/cinematm.png';

const projects = [
  {
    id: 1,
    title: "Data Management",
    year: "2026",
    descriptionKey: "projects.datamgt.description",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "Framer Motion"],
    color: "from-[#1A0005] to-[#050505]",
    url: "https://datamgt.ma/en/",
    image: datamgtImg
  },
  {
    id: 2,
    title: "Car Rental",
    year: "2026",
    descriptionKey: "projects.carrental.description",
    tech: ["React", "Node.js", "Supabase", "Express"],
    color: "from-[#2A2300] to-[#050505]",
    url: "https://car-rental.fatehsaid.com/",
    image: carRentalImg
  },
  {
    id: 3,
    title: "Ausbildung Suche",
    year: "2026",
    descriptionKey: "projects.ausbildung.description",
    tech: ["React", "TypeScript", "REST API", "CSS", "Supabase"],
    color: "from-[#1A0B2E] to-[#05020A]",
    url: "https://ausbildung-suche-app.fatehsaid.com/home",
    image: ausbildungSucheImg
  },
  {
    id: 4,
    title: "CinemaTM",
    year: "2026",
    descriptionKey: "projects.cinematm.description",
    tech: ["React", "TypeScript", "Tailwind CSS", "TMDB API", "Framer Motion"],
    color: "from-[#081F3D] to-[#050505]",
    url: "https://cinematm.fatehsaid.com/",
    image: cinemaImg
  },
  {
    id: 5,
    title: "Seqqaya Restaurant",
    year: "2026",
    descriptionKey: "projects.seqqaya.description",
    tech: ["React", "HTML", "CSS", "n8n"],
    color: "from-amber-900 to-[#110800]",
    url: "https://seqqaya.fatehsaid.com/",
    image: seqqayaImg
  }
];

const Projects = () => {

  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen pt-32 pb-48 px-8 md:px-16 lg:px-24 xl:px-32 text-white bg-[#020202]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-48"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            {t('projects.title')}
          </h2>
          <p className="max-w-2xl text-gray-400 font-montserrat text-lg md:text-xl leading-relaxed">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* On large screens: sticky stacking parallax. On small screens: normal scroll with gap. */}
        <div className="relative w-full flex flex-col gap-12 md:gap-24 lg:block pb-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="lg:sticky pb-8 md:pb-16 lg:pb-24"
              style={{ 
                zIndex: index + 1,
                top: `calc(64px + ${index * 16}px)` 
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div
                  className={`w-full overflow-hidden rounded-3xl border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-gradient-to-br ${project.color}`}
                >
                  {/* Alternate layout: odd cards (0,2) → description left / image right; even cards (1,3) → image left / description right */}
                  <div className={`flex flex-col-reverse ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[480px] lg:h-[520px]`}>

                    <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-between backdrop-blur-xl bg-black/40">
                      <div>
                        <div className="flex justify-between items-center mb-8">
                          <span className="text-gray-400 font-montserrat tracking-widest text-xs md:text-sm uppercase">
                            {t('projects.featured')}
                          </span>
                          <span className="text-gray-500 font-montserrat text-sm">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 font-montserrat text-base md:text-lg leading-relaxed mb-8">
                          {t(project.descriptionKey)}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-3 mb-10">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-xs text-gray-300 font-montserrat bg-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors group w-fit"
                        >
                          <span className="font-montserrat text-sm uppercase tracking-widest">{t('projects.openSite')}</span>
                          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                            <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-full relative overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                         />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
