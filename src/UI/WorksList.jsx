import styled from "styled-components"

const Works = styled.div`
    --col-min-width: 50rem;
    border:  var(--check);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(var(--col-min-width), 100%), 1fr));
    justify-content: center;
    gap: 4rem;

    & >  *{
        border: var(--check);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default function WorksList() {
    return (
        <Works>
            <h1>YosorExp</h1>
            <h1>YosorExp</h1>
            <h1>YosorExp</h1>
            <h1>YosorExp</h1>
            <h1>YosorExp</h1>
            <h1>YosorExp</h1>
        </Works>
    )
}

