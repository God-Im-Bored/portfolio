import React from "react";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";
import ProjectCard from "./ProjectCard.js";
import SkillsCard from "./SkillsCard.js";
import HobbyCard from "./HobbyCard.js";
import bioMap from "../../text.js";
import Typewriter from "typewriter-effect";

const { aboutMe, interest } = bioMap;

const hobbies = {
  interest: [
    "/eating.png",
    "/cooking.png",
    "/activism.png",
    "/read.png",
    "/gardening.png",
    "/sleep.png",
    "/lift.png",
    "/ball.png",
  ],
};

const projects = {
  Viditia: [
    "capitalV.png",
    "Viditia is a web-application where users can visualize and interact with data in a fun and unique way.",
    "React/Redux, D3, Material-UI, Firebase, NPM, Babel, Webpack, Node, Express.",
    "https://viditia-cf976.web.app",
    "https://github.com/2011-capricorn/Viditia",
  ],
  "Weather Widget": [
    "weather-man.png",
    "A free and responsive application that displays weather temperature, related icons, and descriptions about a city's forecast.",
    "React, OpenWeatherAPI, Node, NPM, Babel, Webpack, Netlify.",
    "https://weather-now-65e346.netlify.app/",
    "https://github.com/God-Im-Bored/weather-widget"
  ],
  "COVID-19 Tracker": [
    "coronavirus--v2.gif",
    "A full covid-19 tracker that captures the impact of the virus on Illinois counties.",
    "Create-React-App, NPM, Netlify, ChartJs, Axios, IDPH Covid-19 API, Classnames ",
    "https://wonderful-carson-d7f17f.netlify.app/",
    "https://github.com/God-Im-Bored/chicago-covid-dash"
  ],
  "Players' Shot Charts": [
    "shot-chart.jpeg",
    "Coming Soon.",
    "tech-stack"],
  "Document Viewer": [
    "pdf.png",
    "Coming Soon.",
    "tech-stack"],
};

const titles = {
  Frontend: [
    "/react.png",
    "/redux.png",
    "/material-ui.png",
    "html-5.png",
    "css3.png",
    "d3.jpeg",
    "/dash.png",
    '/hbs.jpeg'
  ],
  Tools: ['/numpy.svg', '/plotly.png', '/mat.png', "/anaconda.png", "/vscode.svg", "jupyter.svg", "/postman.png", 'spss.png', 'sas.png', 'tab.png'],

  Devops: [
    "/npm.png",
    '/netlify.svg',
    "/webpack.png",
    "github.png",
    "/git.webp",
    "/babel.png",
    "/travis-ci.png",
    "/heroku.png",
    '/chrome-dev.png',
    '/docker.png'
  ],
  Languages: [
    "/javascript.png",
    "/python.png",
  ],

  Testing: ["/mocha.svg", "/chai.png", "/jasmine.svg"],
  Backend: [
    '/flask.png',
    "/firebase.png",
    "/express.png",
    "/node-js.png",
    '/sql.png',
    "/postgreesql.png",
    "/sequelize.svg",
    "/passport.svg",
    "/oauth.svg",
    "/socket.svg",
    '/graphql.png'
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    borderRadius: "6px",
    margin: "-60px 30px 0px",
    zIndex: "10",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  text: {
    color: "black",
  },
  title: {
    fontSize: "65px",
    fontFamily: "PT Serif",
  },
  landing: {
    backgroundColor: "transparent",
  },
  writing: {
    zIndex: "20",
    color: "white",
    fontFamily: "PT Serif",
  },
  greeting: {
    fontSize: "55px",
  },
}));

const WebMain = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxwidth="sm" className={classes.landing}>
        <div id="#top" className={classes.writing}>
          <div id="top-header">
            <Typography data-aos="fade-right" className={classes.greeting}>
              Hi!
            </Typography>
          </div>
          <div id="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("My name is Aram.")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("I am a lot of things.")
                  .pauseFor(2000)
                  .deleteChars(14)
                  .typeString("problem-solver.")
                  .pauseFor(2500)
                  .deleteChars(15)
                  .typeString("builder.")
                  .pauseFor(2500)
                  .deleteChars(8)
                  .typeString("teacher.")
                  .pauseFor(2500)
                  .deleteChars(8)
                  .typeString("student.")
                  .pauseFor(2500)
                  .deleteChars(8)
                  .typeString("fullstack software engineer.")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("If you are in Chicago, let's meet for lunch!")
                  .start();
              }}
            />
          </div>
        </div>
      </Container>

      <div id="web-main" className={classes.root}>
        <Container maxWidth="xl">
          <div id="port">
            <div id="port-header" className={classes.text}>
              <Typography id="port-title" className={classes.title}>
                Portfolio
              </Typography>
            </div>
            <div id="port-grid">
              <div id="project-grid">
                {Object.keys(projects).map((project) => (
                  <ProjectCard
                    key={project}
                    name={project}
                    image={projects[project][0]}
                    desc={projects[project][1]}
                    stack={projects[project][2]}
                    demo={projects[project][3]}
                    source={projects[project][4]}
                    id="project-card"
                  />
                ))}
              </div>
            </div>
          </div>

          <div id="bio">
            <div id="bio-header" className={classes.text}>
              <Typography id="bio-title" className={classes.title}>
                Biography
              </Typography>
              <div id="bio-body">
                <span id="avi-wrapper">
                  <div id="avi"></div>
                </span>
                <p id="intro">{aboutMe}</p>
              </div>
              <div id="skills">
                <div id="skills-header">
                  <Typography id="skills-title">
                    Technologies I'm Proficient In
                  </Typography>
                </div>
                <div id="bio-grid">
                  <div id="skills-grid">
                    {Object.keys(titles).map((key) => (
                      <SkillsCard
                        id="skills-card"
                        key={key}
                        title={key}
                        images={titles[key]}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div id="hobbies">
                <div id="hobbies-header">
                  <Typography id="hobbies-title">
                    Hobbies and Interests
                  </Typography>
                </div>
                <div id="hobbies-body">
                  <div id="hobbies-grid">
                    {Object.keys(hobbies).map((hobby) => (
                      <HobbyCard
                        id="hobby-card"
                        key={hobby}
                        name={hobby}
                        images={hobbies[hobby]}
                      />
                    ))}
                  </div>
                  <p id="interest">{interest}</p>
                </div>
              </div>
            </div>
          </div>

          <div id="resume">
            <div id="resume-header" className={classes.text}>
              <Typography id="resume-title" className={classes.title}>
                Resume
              </Typography>
            </div>
            <div id="resume-body">
              <div id="resume-links-main">
                <a
                  id="resume-view"
                  href="/Resume.pdf"
                  target="_blank"
                  className="resume-links"
                >
                  <Button>View Resume</Button>
                </a>
                <a
                  id="dowload-view"
                  href="Resume.pdf"
                  download
                  className="resume-links"
                >
                  <Button>Download Resume</Button>
                </a>
              </div>
            </div>
          </div>

          <div id="contact">
            <div id="contact-header" className={classes.text}>
              <Typography id="contact-title" className={classes.title}>
                Contact
              </Typography>
            </div>
            <footer>
              <div id="contact-links">
                <a
                  href="mailto:aram.martin.eng@gmail.com"
                  // onMouseOver="this.href=this.href.replace(/[zyx]/g,'')"
                  target="_blank"
                >
                  <img src="/email.png"></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/aram-martin"
                  target="_blank"
                >
                  <img src="/linkedin.png"></img>
                </a>
                <a href="https://github.com/God-Im-Bored" target="_blank">
                  <img src="/github.png"></img>
                </a>
              </div>
              <div id="copyright">
                <span>© </span>
                <span id="year">2021 </span>
                <span>Aram Martin. All rights reserved.</span>
              </div>
            </footer>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WebMain;
