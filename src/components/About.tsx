import React from "react";
import { useLanguage } from "./LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col justify-center px-8 md:px-16 lg:px-24">
      {/* Left Headline */}
      <div className="max-w-[1400px] w-full mx-auto gap-12 lg:gap-24 items-end py-32">
        <div className="text-left relative z-10 w-full">
          <span className="text-[#444] font-montserrat text-sm tracking-widest uppercase absolute -top-12 left-0 mb-4 inline-block">
            {t('about.tag')}
          </span>
          <h2 className="font-boldonse w-full text-5xl md:text-7xl lg:text-7xl text-white leading-[1.1] tracking-tight">
            {t('about.headline')}
            {' '}<span className="text-[#888]">{t('about.headline2')}</span>{' '}
            {t('about.headline3')}
          </h2>
        </div>

        {/* Right Sub-text & Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
          <div className="flex flex-col items-start w-full md:col-start-2 mt-8 md:mt-0">
            <p className="font-montserrat text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              {t('about.description')}
            </p>
            <div className="flex justify-end w-full">
              <button
                onClick={() => { window.location.hash = 'projects'; }}
                className="px-8 py-4 border border-[#333] text-gray-300 font-montserrat text-sm mr-8 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                {t('about.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
