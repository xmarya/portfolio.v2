import styled from "styled-components";
import ProjectDetails from "../sections/ProjectDetails";
import { useParams } from "react-router-dom";


export default function Project() {
    const {projectName} = useParams();

    return (
            <ProjectDetails projectName={projectName}/>
    )
}

