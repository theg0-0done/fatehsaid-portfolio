function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-around md:justify-evenly items-center gap-8 text-center"
    >
      <div>
        <p className="text-xl ">Get To Know More</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          About Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-evenly items-center w-full">
        <img
          className="rounded-3xl border-gray-500 border-2 p-3 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] transition-all duration-100 ease-in-out"
          src="https://images.pexels.com/photos/12200696/pexels-photo-12200696.jpeg"
          alt="about image"
        />
        <div className="flex flex-col gap-2 lg:justify-evenly items-center lg:w-[40%]">
          <h4 className="text-xl">My Name Is</h4>
          <h2 className="text-4xl font-semibold">Said Fateh</h2>
          <p className="w-[80%] lg:w-full text-xl md:text-2xl ">
            I’m a 20-year-old Computer Science second-year student in university
            from Morocco.
            <br /> I'm passionate about web-development, software engineering,
            and building meaningful digital tools.
            <br /> I’ve completed several online courses, and I’m currently
            working on personal projects to improve my soft skills.
          </p>
        </div>
      </div>
      <a href="#projects" className="absolute bottom-0 right-6 h-14 w-14 ">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1665/1665586.png"
          alt="down arrow icon"
        />
      </a>
    </section>
  );
}

export default About;
