import React from 'react';
import { motion } from 'framer-motion';

const skillColumns = [
  {
    title: "Front-End",
    accent: "text-sky-400",
    borderAccent: "border-sky-500/20",
    dotColor: "bg-sky-400",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js / WebGL", level: 70 },
      { name: "HTML5 / CSS3", level: 98 },
    ],
  },
  {
    title: "Back-End",
    accent: "text-violet-400",
    borderAccent: "border-violet-500/20",
    dotColor: "bg-violet-400",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Supabase", level: 88 },
      { name: "Firebase", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "Mobile Apps",
    accent: "text-emerald-400",
    borderAccent: "border-emerald-500/20",
    dotColor: "bg-emerald-400",
    skills: [
      { name: "React Native", level: 80 },
      { name: "Capacitor / Ionic", level: 75 },
      { name: "Expo", level: 78 },
      { name: "Push Notifications", level: 72 },
      { name: "App Store Deploy", level: 70 },
      { name: "Responsive Design", level: 95 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const barVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
  }),
};

const Experience: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#08080C] flex flex-col items-center justify-center px-8 py-24 md:py-32">
      <div className="max-w-7xl w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <h2 className="font-boldonse text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6">
            Experience.
          </h2>
          <p className="font-montserrat text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A full-stack skill set built across years of shipping real products — from pixel-perfect UIs to scalable backends and cross-platform apps.
          </p>
        </motion.div>

        {/* Three columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skillColumns.map((column) => (
            <motion.div
              key={column.title}
              variants={cardVariants}
              className={`bg-white/[0.03] border border-white/8 rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-500 ${column.borderAccent}`}
            >
              {/* Column header */}
              <div className="flex items-center gap-3 mb-10">
                <div className={`w-2 h-2 rounded-full ${column.dotColor}`} />
                <h3 className={`font-boldonse text-xl ${column.accent}`}>{column.title}</h3>
              </div>

              {/* Skills list */}
              <ul className="flex flex-col gap-7">
                {column.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-montserrat text-gray-300 text-sm">{skill.name}</span>
                      <span className="font-montserrat text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    {/* Progress bar track */}
                    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${column.dotColor}`}
                        variants={barVariants}
                        custom={skill.level}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
