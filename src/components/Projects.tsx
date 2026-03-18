import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Ausbildung Suche",
    year: "2024",
    description: "A specialized platform designed to help students find vocational training opportunities in Germany. Features intuitive search, detailed company profiles, and a seamless application interface.",
    tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
    color: "from-zinc-900 to-black",
    url: "https://ausbildung-suche-app.vercel.app"
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    year: "2023",
    description: "An intuitive interface for a personal finance tracking app. Allows users to connect their bank accounts, categorize expenses, and visualize their spending habits over time with interactive charts.",
    tech: ["Next.js", "Framer Motion", "Supabase"],
    color: "from-neutral-900 to-[#0a0a0a]",
    url: "https://portfolio-v-2-delta.vercel.app" // Placeholder for demonstration
  },
  {
    id: 3,
    title: "Creative Agency Portfolio",
    year: "2023",
    description: "A highly interactive portfolio website for a creative agency. Includes custom WebGL animations, smooth scroll experiences, and a headless CMS integration for easy content updates.",
    tech: ["Three.js", "GSAP", "Sanity IO"],
    color: "from-stone-900 to-[#050505]",
    url: "https://v-2-silk.vercel.app" // Placeholder for demonstration
  }
];

const ProjectPreview = ({ url, title }: { url?: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!url) {
    return (
      <div className="w-full h-full rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <span className="text-gray-600 font-montserrat text-xs uppercase tracking-[0.2em] relative z-10">
          Preview Unavailable
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl relative overflow-hidden group-hover:scale-[1.02] transition-all duration-700">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm z-20">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <iframe 
        src={url} 
        title={title}
        className="w-full h-full border-none transition-opacity duration-1000"
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1 }}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
      
      {/* Interactive Overlay Hint */}
      <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white/50 uppercase tracking-widest font-montserrat">
          Interactive Preview
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-48 px-8 md:px-16 lg:px-24 xl:px-32 text-white bg-[#020202]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Selected Projects.
          </h2>
          <p className="max-w-2xl text-gray-400 font-montserrat text-lg md:text-xl leading-relaxed">
            A curated selection of my latest work. These previews are fully interactive — go ahead and scroll or click inside them.
          </p>
        </motion.div>
        
        <div className="relative w-full flex flex-col gap-12 md:gap-24 pb-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="sticky w-full"
              style={{
                top: `calc(10vh + ${index * 40}px)`,
                zIndex: index + 10,
              }}
            >
              <div 
                className={`w-full overflow-hidden rounded-3xl border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-gradient-to-br ${project.color}`}
              >
                <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]">
                  
                  <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-between backdrop-blur-xl bg-black/40">
                    <div>
                      <div className="flex justify-between items-center mb-8">
                        <span className="text-gray-400 font-montserrat tracking-widest text-xs md:text-sm uppercase">
                          Featured
                        </span>
                        <span className="text-gray-500 font-montserrat text-sm">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 font-montserrat text-base md:text-lg leading-relaxed mb-8">
                        {project.description}
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
                        <span className="font-montserrat text-sm uppercase tracking-widest">Open Full Site</span>
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                          <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 lg:p-10">
                       <ProjectPreview url={project.url} title={project.title} />
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;