import styled from "styled-components";


export const Button = styled.button`
    background-color: var(--colour-grey-900);
    color: var(--neon-purple);
    font-size: var(--lg-text);
    font-weight: 500;
    border-radius: var(--md-radius);
    border: 0.2rem solid var(--neon-purple);
    
    padding: 1.6rem 3.2rem;

    &:hover {
        box-shadow: 0.2rem 0.2rem 0 0 var(--neon-purple);
        border: 0.2rem solid var(--neon-purple);
        transform: translate(-0.2rem, -0.4rem);
    }
`;