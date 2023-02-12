import React from 'react'
import { useParams} from "react-router-dom";
import { ProjectList } from "../Data/ProjectList"
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p>
            <b>Skills:</b>{project.skills}
        </p>
        <a href={project.link} target={"_blank"}><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay