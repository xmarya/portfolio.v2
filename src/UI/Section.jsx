import styled from "styled-components";

export const Section = styled.section`
  /* display: ${(props) => props.display || ""}; */
  height: auto;
  margin-top: var(--section-mt);

  p {
    margin-bottom: 1.5rem;
  }
`;

/*  this was for the _Offer.jsx
// drow the hirarechy of the scrolling 
export const CarouselSection = styled.section`
  height: 200svh;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: start;
  gap: 4rem;
  margin-top: calc(var(--section-mt) *3);

  p {
    margin-bottom: 1.5rem;
  }
  div {
    position: sticky;
    top:0;
  }
`;*/

export const CentredSection = styled.section`
  min-height: 90svh;
  max-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--section-mt) auto 0;
`;
