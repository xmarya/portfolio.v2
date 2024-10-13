import { dictionary } from "../data/dictionary";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import WorksList from "../UI/WorksList";

export default function MyWorks({language}) {
    const {works} = dictionary;
    return (
        <Section id="works">
            <AnimatedWrapper>
                <SectionHeading language={language}>{works.sectionHeading[language]}</SectionHeading>
            </AnimatedWrapper>
            
            <WorksList language={language}/>
        </Section>
    )
}

