import styled from "styled-components"
import { SectionSubHeading } from "./Headings";
import { TagsGroup } from "./TagsGroup";
import { Tag } from "./Tag";

const Works = styled.div`
    --col-min-width: 40rem;
    --row-min-height: 20rem;
    border:  var(--check);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(var(--col-min-width), 100%), 1fr));
    /* grid-template-rows: repeat(auto-fill, minmax(min(var(--col-min-width), fit-content), 1fr)); */
    grid-auto-rows: minmax(var(--row-min-height), 1fr);

    justify-content: center;
    gap: 4rem;

    & > * {
        border: var(--check);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & div,
    div > * {
        border: var(--check);

    }

    ${SectionSubHeading} {
        text-align: center;
        margin-bottom: 0;
    }

`;

const DetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;



export default function WorksList() {
    return (
        <Works>
            <div>
                <SectionSubHeading>YosorEXP (2023)</SectionSubHeading>
                <div>
                    <video loop muted autoPlay playsInline>
                        <source src="/vids/vid1.mp4" type="video/mp4"/>
                        Your browser does not support the video format.
                    </video>
                </div>
                <DetailsContainer>
                    <TagsGroup>
                        <Tag>Front-End</Tag>
                        <Tag>HTML</Tag>
                        <Tag>CSS</Tag>
                        <Tag>JavaScript</Tag>

                    </TagsGroup>
                    DETAILS
                    DETAILS
                    DETAILS
                    DETAILS
                    DETAILS
                    DETAILS
                </DetailsContainer>

            </div>
            <div>YosorExp</div>
            <div>YosorExp</div>
            <div>YosorExp</div>
        </Works>
    )
}

