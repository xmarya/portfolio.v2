import AnimatedWrapper from "../UI/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";

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
    </Section>
  );
}
