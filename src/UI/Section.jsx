import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => props.display || ""};
  height: 80svh;
  margin-top: var(--section-mt);

  p {
    margin-bottom: 1.5rem;
  }
`;

export const CarouselSection = styled.section`
  height: 400vh;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: start;
  gap: 4rem;
  padding-top: var(--section-mt);

  p {
    margin-bottom: 1.5rem;
  }

  div {
    position: sticky;
    top:0;
  }
`;

export const CentredSection = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem auto 0;
`;
