import styled from "styled-components";


export const Section = styled.section`
    display: ${(props) => props.display || ""};
    align-items: center;
    justify-content: space-between;
    margin-top: var(--section-mt);

    p {
    margin-bottom: 1.5rem;
    }
`;

export const InnerSection = styled.div`
    width: 80%;
    margin: 20rem auto 0;
`;