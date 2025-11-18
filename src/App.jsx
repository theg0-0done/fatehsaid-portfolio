import "./App.css";
import Nav from "./components/Nav";
import Profile from "./sections/Profile";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Nav />
      <Profile />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}

export default App;
