export const styles = {
  profile: {
    navbar:
      "relative z-10 w-full h-[16vh] bg-gray-200 text-black flex justify-between lg:justify-around px-8 items-center transition-all duration-600 ease-in-out",
    navLink: "text-gray-700 hover:underline hover:underline-offset-8",
    hamSpan: "bg-black transition-all ease-in-out h-1",
    avatar:
      "w-[50vw] lg:w-[40vw] xl:w-[30vw] rounded-4xl border-gray-500 border-2 p-1 md:p-3 transition-all duration-100 ease-in-out",
    contactBtn:
      "hover:bg-gray-800 hover:text-white md:text-xl px-8 py-4 rounded-4xl cursor-pointer bg-transparent text-black border-2 border-gray-600 transition-all duration-300 ease-in-out ",
    resumeBtn:
      "bg-gray-800 text-white md:text-xl px-8 py-4 rounded-4xl cursor-pointer hover:bg-transparent hover:text-black border-2 border-transparent hover:border-gray-600 transition-all duration-300 ease-in-out ",
    hamList:
      "absolute text-xl md:text-2xl flex flex-col items-start gap-4 px-6 py-4 md:py-6 bg-gray-200 h-fit w-[40%] right-0 rounded-bl-2xl transition-all duration-600 ease-in-out",
  },

  contact: {
    link: "text-[1.2rem] md:text-2xl text-gray-700 hover:underline hover:underline-offset-8",
  },

  experiences: {
    languageElement:
      "flex justify-around lg:justify-between items-center gap-2",
    languageInfo: "flex flex-col justify-center items-start gap-1",
    language: "text-xl md:text-2xl lg:text-3xl font-semibold ",
    container: "border-2 border-gray-300 rounded-4xl px-2 py-4 md:p-8 xl:py-12 flex flex-col xl:flex-row w-fit md:w-[35%] xl:gap-8 flex-wrap justify-between items-start",
    title: "w-full text-3xl lg:text-4xl font-semibold",
  },
};
