import styled from "styled-components";
import { Button } from "./Button";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0 5rem;
    margin-top: 4rem;
    
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
        /* align-self: center; */
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
        box-shadow: 0px 0px 0.8rem var(--neon-purple);
    }

    &:focus,
    &:active {
        border-radius: var(--sm-radius);
        outline: 2px solid var(--neon-purple);
        box-shadow: 0px 0px 0.7rem var(--neon-purple);
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
        box-shadow: 0px 0px 0.8rem var(--neon-purple);
    }

    &:focus {
        border-radius: var(--sm-radius);
        outline: 2px solid var(--neon-purple);
        box-shadow: 0px 0px 0.7rem var(--neon-purple);
        border-bottom: none;

    }
`;



