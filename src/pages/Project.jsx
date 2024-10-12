import styled from "styled-components";
import ProjectDetails from "../sections/ProjectDetails";
import { useParams } from "react-router-dom";

const StyledProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    /* gap: 3rem; */

    position: relative;
`;

export default function Project() {
    const {projectName} = useParams();

    return (
        <StyledProjectDetails>
            <ProjectDetails projectName={projectName}/>
        </StyledProjectDetails>
    )
}

