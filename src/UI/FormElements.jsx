import styled from "styled-components";
import { Button } from "./Button";


export const Form = styled.form`   

    box-shadow: var(--corners-shadow);
    border-radius: var(--lg-radius);
`;

export const SidesContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: 1.5s ease;

    
    /* &:hover { 
        transform: perspective(150rem) rotateY(-180deg);
    } */
`
export const FrontSide = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
    padding: 4rem;

`;

export const BackSide = styled(FrontSide)`
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: 1fr;
    
`;

export const FormRow = styled.div`

    ${Button} {
        padding: 0.8rem 3rem;
    }

`;

export const Label = styled.label`
    display: block;
    font-size: var(--lg-text);
    align-self: start;
    margin-bottom: 0.8rem;

`;

export const Input = styled.input`
    width: 77%;
    height: 3.5rem;
    background-color: var(--colour-grey-900);
    font-size: var(--md-text);
    border-bottom: 0.2rem solid var(--neon-purple);
    padding: 1.2rem;

    &:hover {
        border-radius: var(--sm-radius);
        outline: 0.2rem solid var(--neon-purple);
    }

    &:focus {
        border-radius: var(--sm-radius);
        outline: 0.2rem solid var(--neon-purple);
        outline-offset: 0.2rem; // overriding the outline in the general :focus selector in index.css
        background-color: var(--colour-grey-900);
        border-bottom: none;
    }

`;

export const Textarea = styled.textarea`
    width: 88%;
    height: 16rem;
    background-color: var(--colour-grey-900);
    font-size: var(--md-text);
    border-bottom: 0.2rem solid var(--neon-purple);
    resize: none;
    padding: 1.2rem;

    &::-webkit-scrollbar {
        scrollbar-width: thin;
        background-color: var(--colour-grey-300);
    }
 
    &::-webkit-scrollbar-thumb {
        background-color: var(--neon-purple);
        border-radius: 1rem; /* Optional: for rounded corners */
        border: 0.3rem solid var(--colour-grey-300); /* Matches the container background color */
        background-clip: padding-box; /* Ensures that the border is visible */
    }

    &:hover {
        border-radius: var(--sm-radius);
        outline: 0.2rem solid var(--neon-purple);
    }

    &:focus {
        border-radius: var(--sm-radius);
        background-color: var(--colour-grey-900);
        outline: 0.2rem solid var(--neon-purple);
        outline-offset: 0.2rem; // overriding the outline in the general :focus selector in index.css
        border-bottom: none;

    }
`;

export const FormError = styled.p`
    min-height: 3.7rem; /* this line for reserving the space, adjust the preserved height based on font-size */
    visibility: ${(props) => props.hasError ? "visible" : "hidden"};
    color: var(--neon-red);
    font-size: var(--sm-text);
    font-weight: 600;
    margin-top: 0.8rem;

`;