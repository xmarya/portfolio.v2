import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const HeroHeading = styled.h1`
  font-size: var(--hero-heading);
  line-height: 1.3;

  ${(props) => {
    return props.language === "ar" &&
       css`
         line-height: 1.6;
          font-weight: 700;
        `
  }}
`;

export const SectionHeading = styled.h2`
width: 100%;
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

    ${(props) => {
      return props.language === "ar"
        ? css`
            margin-left: 0.4rem;
          `
        : css`
            margin-right: 0.4rem;
          `;
    }}
  }

  &::after {
    content: "";
    border: 1px solid var(--neon-purple);
    display: inline-block;
    position: relative;
    top: 0;
    width: 30rem;
    height: 0.01rem;
    vertical-align: middle;

    ${(props) => {
      return props.language === "ar"
        ? css`
            margin-right: 1.6rem;
          `
        : css`
            margin-left: 1.6rem;
          `;
    }}

    @media (max-width: 112.5em) {
      width: 20rem;
    }

    @media (max-width: 25em) {
      width: 12rem;
      ${(props) => {
        return props.language === "ar"
          ? css`
              margin-right: 0.6rem;
            `
          : css`
              margin-left: 0.6rem;
            `;
      }}
    }
  }
`;

export const SectionSubHeading = styled(motion.h3)`
${(props) => {
    return props.language === "ar" &&
       css`
          font-weight: bolder;
        `
  }}
  font-size: var(--xxl-text);
  margin-bottom: 3rem;
`;

export const ProjectName = styled(SectionHeading)`
  position: static;
  padding: 1rem;
  margin: 0;
  &::before,
  &::after {
    display: none;
  }
`;