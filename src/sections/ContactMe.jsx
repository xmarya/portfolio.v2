import styled from "styled-components";
import { Section } from "../UI/Section";
import { SectionHeading, SectionSubHeading } from "../UI/Headings";
import { Form, FormRow, Input, Label, Textarea } from "../UI/FormElements";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { Button } from "../UI/Button";

const WorkState = styled.div`
  position: relative;
  font-size: var(--p-text);

  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    position: relative;
    background-color: ${(props) =>
      props.workState === "busy" ? "var(--neon-red)" : "var(--neon-green)"};
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    margin-top: 0.2rem;
    margin-right: 0.4rem;
  }
`;

export default function ContactMe() {
  return (
    <Section id="contact-me" display="grid">
      <div className="self-start">
        <AnimatedWrapper>
            <SectionHeading>contact</SectionHeading>
        </AnimatedWrapper>
        <AnimatedWrapper>
        <WorkState workState="busy">Busy</WorkState>
        </AnimatedWrapper>
      </div>

      <Form>
        <FormRow>
        <Label htmlFor="name">Name:</Label>
        <Input required type="text" name="name" id="name" />
        </FormRow>

        <FormRow>
        <Label htmlFor="email">Email:</Label>
        <Input required type="email" name="email" id="email" />
        </FormRow>

        <FormRow>
        <Label htmlFor="details">Tell me about your project:</Label>
        <Textarea required name="details" id="details"></Textarea>
        </FormRow>

        <FormRow>
            <Button size="small">Send</Button>
        </FormRow>
      </Form>
    </Section>
  );
}
