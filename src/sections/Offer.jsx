import styled from "styled-components";
import AnimatedWrapper from "../UI/AnimatedWrapper";
import { SectionHeading, SectionSubHeading } from "../UI/Headings";
import { Section } from "../UI/Section";


const OffersList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 7rem;
`;

const OffersListItems = styled.li`
/* making each item the same width in order to make the correctley aligned by setting  justify-content: start*/
  width: 20rem;
  text-align: start;
  font-size: var(--lg-text);
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: start;

  background-color: grey;

  &::before {
    content: "";
    position: relative;
    display: block;
    background-color: var(--neon-purple);
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;


export default function Offer() {
  return (
    <Section id="what-i-offer">
      <AnimatedWrapper>
        <SectionHeading>what I offer?</SectionHeading>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          I can help you design the web page from scratch, or only code your
          existing design. I always aim to deliver results that exceed your
          expectations. Your satisfaction is my priority.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          Also, if you become my customer, Don’t worry, I GOT YOUR BACK with
          full support in case of any errors and will be available when you
          encounter issues after deploying your web application.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          So don’t hesitate to reach out! you’re one step away from your web
          application.
        </p>
      </AnimatedWrapper>

      <div className="bg-black w-[50%]">
        {/* <SectionSubHeading>My Services:</SectionSubHeading> */}
        <ul className="bg-purple-600 list-inside flex flex-wrap items-start justify-between gap-8 py-8 px-28">
          <OffersListItems>UI/UX Design</OffersListItems>
          <OffersListItems>Wireframe Design</OffersListItems>
          <OffersListItems>front-end Development</OffersListItems>
          <OffersListItems>Back-end Development</OffersListItems>
        </ul>
      </div>
      
    </Section>
  );
}
