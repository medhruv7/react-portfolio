import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useEffect, useState } from "react";

const Navbar = ({
  scrollToComponent,
  homeRef,
  workExperienceRef,
  projectsRef,
  achievementsRef,
}) => {
    const [visible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollPos]);

  const buttonStyles = { color: "inherit" };
  const toolBarStyle = { display: "flex", justifyContent: "flex-end" };

  return (
    visible && (
      <AppBar>
        <Toolbar style={toolBarStyle}>
          <Button
            variant="text"
            style={buttonStyles}
            onClick={() => scrollToComponent(homeRef)}
          >
            Home
          </Button>
          <Button
            variant="text"
            style={buttonStyles}
            onClick={() => scrollToComponent(workExperienceRef)}
          >
            Experience
          </Button>
          <Button
            variant="text"
            style={buttonStyles}
            onClick={() => scrollToComponent(achievementsRef)}
          >
            Acheievements
          </Button>
          <Button
            variant="text"
            style={buttonStyles}
            onClick={() => scrollToComponent(projectsRef)}
          >
            Projects
          </Button>
          {/* <Button
          variant="text"
          style={buttonStyles}
          onClick={() => scrollToComponent(contactRef)}
        >
          Contact
        </Button> */}
        </Toolbar>
      </AppBar>
    )
  );
};

export default Navbar;
