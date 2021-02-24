import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Container,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    boxShadow: "none",
    "&:scroll": {
      backgroundColor: "white",
    },
  },
  text: {
    color: "black",
    fontSize: "14px",
    padding: "15px",
    flexDirection: "row",
    fontWeight: "bold",
    fontFamily: "Lato, sans-serif",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleLink = (text) => {
    if (text === "Portfolio") return "#port";
    if (text === "Biography") return "#bio";
    if (text === "Resume") return "#resume";
    if (text === "Contact") return "#contact";
  };

  return (
    <div>
      <Container maxWidth="sm">
        <AppBar position="fixed" top={40} id="appbar" className={classes.root}>
          <div id="appbar-links">
            <a href="#top" id="logo">
              A
            </a>
            <Toolbar>
              <Router>
                <a href="#port">
                  <Button className={classes.text} color="secondary">
                    Portfolio
                  </Button>
                </a>
                <a href="#bio">
                  <Button className={classes.text} color="secondary">
                    Biography
                  </Button>
                </a>
                <a href="#resume">
                  <Button className={classes.text} color="secondary">
                    Resume
                  </Button>
                </a>
                <a href="#contact">
                  <Button className={classes.text} color="secondary">
                    Contact
                  </Button>
                </a>

                <a href="https://github.com/God-Im-Bored" target="_blank">
                  <Button className={classes.text} color="secondary">
                    Github
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/aram-martin"
                  target="_blank"
                >
                  <Button className={classes.text} color="secondary">
                    Linkedin
                  </Button>
                </a>
              </Router>
            </Toolbar>
          </div>
        </AppBar>
      </Container>
    </div>
  );
};

export default NavBar;
