import styled from "styled-components";
import OneProject from "../sections/OneProject";
import { useParams } from "react-router-dom";

const StyledProjectDetails = styled.div`
    border: var(--check);
    display: flex;
    flex-direction: column;
    align-items: start;
    /* gap: 3rem; */

    position: relative;
`;

export default function ProjectDetails() {
    const {projectName} = useParams();

    return (
        <StyledProjectDetails>
            <OneProject projectName={projectName}/>
        </StyledProjectDetails>
    )
}

