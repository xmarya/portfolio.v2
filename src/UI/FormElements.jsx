import styled from "styled-components";
import { Button } from "./Button";
import { motion } from "framer-motion";


export const Form = styled.form`   
    border-radius: var(--lg-radius);
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

`;

export const FormGrid = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: 1fr;
    align-content: center;
    justify-items: stretch;
    
`;

export const FormRow = styled(motion.div)`

    ${Button} {
        justify-self: center;
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
    height: 10rem;
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

export const AfterSubmit = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: var(--colour-grey-900);

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6rem;

    p {
        font-size: var(--secondary-heading);
        text-align: center;
    }
    
`;