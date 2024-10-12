import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--colour-grey-900);
  color: var(--neon-purple);
  font-size: var(--button-text);
  font-weight: 500;
  border-radius: var(--md-radius);
  border: 0.2rem solid var(--neon-purple);

  padding: 1.2rem 2.4rem;
  /* padding-block: clamp(0.8rem, 1.6rem, 1.8rem);
  padding-inline: clamp(1.2rem, 3.2rem, 3.6rem); */

  &:disabled {
    background-color: var(--colour-grey-200);
    color: var(--colour-grey-500);
    border-color: var(--colour-grey-500);
  }
  
  &:hover:not(:disabled) {
    box-shadow: 0.2rem 0.2rem 0 0 var(--neon-purple);
    border: 0.2rem solid var(--neon-purple);
    transform: translate(-0.2rem, -0.4rem);
  }

  &:hover:focus-visible {
    /* this to remove the starnge browser's white border that appears when both hover and focus actions are applied to the button at once
    here, We Ensuring the hover styles apply even when the button is focused */
    box-shadow: 0.2rem 0.2rem 0 0 var(--neon-purple);
    border: 0.2rem solid var(--neon-purple);
    outline: none; /* Resetting the outline */
    transform: translate(-0.2rem, -0.4rem);
  }

  &:active:enabled {
    box-shadow: 0.1rem 0.1rem 0 0 var(--neon-purple);
    transform: translate(-0.1rem, -0.2rem);
  }

  &:focus-visible:not(:hover) {
    outline: 0.2rem solid var(--neon-purple);
    outline-offset: 0.6rem;
  }
`;
