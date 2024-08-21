import styled from "styled-components";
import { tools } from "../data/toolsData";


const CardList = styled.ul`
    width: 80%;
    padding: 4rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 0;
    gap: 2.6rem;
`;

const Card = styled.li`
    --themeColour: ${(props) => `var(${props.themeColour})`};
    width: 25rem;
    height: 10rem;
    background-color: var(--colour-grey-900);
    color: var(--colour-grey-400);
    font-size: var(--xxl-text);
    border-radius: var(--md-radius);
    border: 0.3rem solid var(--themeColour);
    
    padding: 1.6rem;
    

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: var(--colour-grey-100);
        border: 0.3rem solid var(--themeColour);
        box-shadow: 0.3rem 0.6rem 0 0 var(--themeColour);
        transform: translate(-0.2rem, -0.4rem);
    }
`;

export default function CardsList() {
    return (
        <CardList>
            {tools.map(tool => <Card key={tool.name} themeColour={tool.themeColour}>{tool.name}</Card>)}
        </CardList>
    )
}

