import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Navbar = () => {
  const buttonStyles = { color: "inherit" };
  const toolBarStyle = { display: "flex", justifyContent: "flex-end" };
  return (
    <AppBar position="static">
      <Toolbar style={toolBarStyle}>
        <Button variant="text" style={buttonStyles}>
          Home
        </Button>
        <Button variant="text" style={buttonStyles}>
          Experience
        </Button>
        <Button variant="text" style={buttonStyles}>
          Education
        </Button>
        <Button variant="text" style={buttonStyles}>
          Projects
        </Button>
        <Button variant="text" style={buttonStyles}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
