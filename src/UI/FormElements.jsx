import styled from "styled-components";
import { Button } from "./Button";
import { motion } from "framer-motion";


export const Form = styled(motion.form)`
    background-color: var(--colour-grey-800) ;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md);
    border-radius: var(--lg-radius);
    transition: box-shadow 0.5s ease-in; // for the shadows colours

    position: relative;
    overflow: hidden;
`;

export const FormGrid = styled(motion.div)`
    font-size: var(--lg-text);

    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(15rem, 1fr));
    grid-template-rows: auto;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 1rem 2rem;

    input:hover,
    textarea:hover {
        border-bottom: 0;
        border-radius: var(--sm-radius);
        outline: 0.2rem solid var(--neon-purple);
    }

    input:focus,
    textarea:focus{
        border-radius: var(--sm-radius);
        outline: 0.2rem solid var(--neon-purple);
        outline-offset: 0.2rem; // overriding the outline in the general :focus selector in index.css
        border-bottom: none;
    }

    @media (max-width: 56em) {
        grid-template-columns: 1fr;
        padding: 2rem 4rem;
    }

`;

export const FormRow = styled(motion.div)`
    ${Button} {
        justify-self: center;
        padding: 0.8rem 3rem;
    }

    @media (max-width: 56em) {
        grid-column: 1 / -1;
    }
`;

export const Label = styled.label`
    display: block;
    font-size: var(--lg-text);
    align-self: start;
    margin-bottom: 0.8rem;

`;

export const Input = styled.input`
    background-color: var(--colour-grey-800);

    width: 90%;
    height: 3.5rem;
    font-size: var(--md-text);
    border-bottom: 0.2rem solid var(--neon-purple);
    padding: 1.2rem;

`;

export const Textarea = styled.textarea`
    background-color: var(--colour-grey-800) ;

    width: 88%;
    height: 10rem;
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
    background-color: var(--colour-grey-800);
    border-radius: var(--lg-radius);

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    p {
        font-size: var(--secondary-heading);
        text-align: center;
    }
    
`;