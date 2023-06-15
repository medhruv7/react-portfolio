import "./App.css";
import { useEffect, useRef, useState } from "react";
import Acheievements from "./components/Acheivements";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { IconButton, Tooltip } from "@mui/material";

function App() {
  const homeRef = useRef(null);
  const workExperienceRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const scrollToComponent = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-div">
      <Navbar
        scrollToComponent={scrollToComponent}
        homeRef={homeRef}
        workExperienceRef={workExperienceRef}
        projectsRef={projectsRef}
        achievementsRef={achievementsRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={workExperienceRef}>
        <WorkExperience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={achievementsRef}>
        <Acheievements />
      </div>
      {showButton && (
        <div
          style={{ marginLeft: "auto", position: "fixed", bottom: 0, right: 0 }}
        >
          <Tooltip title="Back To Top" placement="left-start">
            <IconButton onClick={scrollToTop}>
              <ArrowCircleUpIcon style={{ fontSize: "50px" }} />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

export default App;
