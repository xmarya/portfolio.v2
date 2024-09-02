import styled from "styled-components";
import { Button } from "./Button";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 3rem 5rem;
    margin-top: 4rem;

    box-shadow: 1rem -1rem var(--neon-purple), -1rem 1rem var(--neon-purple);
    
`;


export const FormRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.8rem;

    /* padding: 1.4rem;  */

    ${Button} {
        padding: 0.8rem 3rem;
        margin-top: 1.5rem;
    }

`;

export const Label = styled.label`
    display: block;
    font-size: var(--lg-text);
    align-self: start;
`;

export const Input = styled.input`
    display: block;
    width: 77%;
    height: 3.5rem;
    background-color: var(--colour-grey-900);
    font-size: var(--md-text);
    border-bottom: 0.2rem solid var(--neon-purple);
    padding: 1.2rem;

    &:hover {
        backdrop-filter: blur(2.5rem) saturate(0%);
        -webkit-backdrop-filter: blur(2.5rem) saturate(0%);
        background-color: rgba(176, 123, 255, 0.63);
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
    display: block;
    width: 77%;
    height: 25rem;
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
        backdrop-filter: blur(2.5rem) saturate(0%);
        -webkit-backdrop-filter: blur(2.5rem) saturate(0%);
        background-color: rgba(176, 123, 255, 0.63);
        border-radius: var(--sm-radius);
    }

    &:focus {
        border-radius: var(--sm-radius);
        background-color: var(--colour-grey-900);
        outline: 0.2rem solid var(--neon-purple);
        outline-offset: 0.2rem; // overriding the outline in the general :focus selector in index.css
        border-bottom: none;

    }
`;



