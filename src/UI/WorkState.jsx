import styled, { keyframes } from "styled-components";


const pulse = keyframes`
    to {
        filter: drop-shadow(0 0.1rem 0.5rem var(--state-colour));
    }
`;

export const WorkState = styled.div`
    --state-colour: ${props => props.state === "busy" ? "var(--neon-red)" : "var(--neon-green)"};
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        display: block;
        position: relative;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        background-color: var(--state-colour);
        margin-inline: 0.4rem;

        filter: drop-shadow(0 0.1rem 0.1rem var(--state-colour));

        animation: ${pulse} 1.5s infinite ease-out;
    }
`;

