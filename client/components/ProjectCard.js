import React from "react";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  CardMedia
} from "@material-ui/core";

const ProjectCard = ({ name, desc, stack, demo, source, image }) => {
  return (
    <Card raised id="project-card-single">
      <CardHeader id="project-card-header" title={name} />
      <CardMedia>
        <img src={image} id='project-image'/>
      </CardMedia>

      <CardContent id="project-info">
        <Typography>{desc}</Typography>
      </CardContent>
      <CardContent>
        <Typography>{stack}</Typography>
      </CardContent>
      <CardActions id='project-links-main' >
        <a href={demo} target="_blank" className="project-links">
          <Button>
            <Typography>DEMO</Typography>
          </Button>
        </a>

        <a href={source} target="_blank" className="project-links">
          <Button>
            <Typography>SOURCE</Typography>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
