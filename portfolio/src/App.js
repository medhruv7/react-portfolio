import Acheievements from "./components/Acheivements";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <WorkExperience />
      <Projects />
      <Acheievements />
    </div>
  );
}

export default App;
