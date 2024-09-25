import { motion } from "framer-motion";
import styled from "styled-components";


export const HeroHeading = styled.h1`
    font-size: var(--hero-heading);
    line-height: 1.3;
`;

export const SectionHeading = styled.h2`
    font-size: var(--section-heading);
    font-weight: 600;
    position: relative;
    margin-top: var(--section-heading-mt);
    margin-bottom: var(--section-heading-mb);

  &::before {
    content: "0" counter(section-heading) ".";
    position: relative;
    counter-increment: section-heading 1;
    color: var(--neon-purple);
    font-size: clamp(var(--lg-text), 3vw, 2rem);
    margin-right: 0.4rem;
  }

  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: 0;
    width: 30rem;
    height: 0.01rem;
    background-color: var(--neon-purple);
    vertical-align: middle;
    margin-left: 1.6rem;

    @media (max-width: 112.5em) {
      width: 20rem;
    }
/* 
    @media (max-width: 48em) {
        width: 100%;
    }

    @media (max-width: 37.5em) {
        margin-left: 1rem;
    } */

  }
`;

export const SectionSubHeading = styled(motion.h3)`
    font-size: var(--xxl-text);
    margin-bottom: 3rem;
`;