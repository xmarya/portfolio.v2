import styled, { css } from "styled-components";

export const Section = styled.section`
border: var(--check);
  min-height: 90svh;
  margin-top: var(--section-mt);
  
  ${(props) =>
    props.display === "grid" &&
    css`
      display: grid;
      /* grid-template-columns: max-content 1fr; */
      grid-template-columns: repeat(2, minmax(min(20rem, 100%), 1fr));

    `};

  ${(props) =>
    props.display === "flex" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: var(--section-mt) auto 0;
    `};

    &:last-of-type {
      margin-bottom: 6rem;
    }

  p {
    margin-bottom: 1.5rem;
  }
  /* &::after {
  content: "";
  position: absolute;
  display: block;
  width: 90rem;
  height: 40rem;
  left: 60rem;
  bottom: 5rem;
  background:
  conic-gradient(from  30deg at 87.5% 75%,var(--colour-grey-900)  60deg,var(--neon-purple) 0 120deg,#0000 0) 0 calc(.2165*150px),
  conic-gradient(from -90deg at 50%   25%,var(--neon-purple)  60deg,var(--colour-grey-900) 0 180deg,#0000 0),
  conic-gradient(from  90deg at 50%   75%,var(--neon-purple) 120deg,var(--colour-grey-900) 0 180deg,#0000 0),
  conic-gradient(from -30deg at 87.5% 50%,var(--neon-purple) 120deg,var(--colour-grey-900) 0 240deg,#0000 0),
  conic-gradient(from  90deg at 37.5% 50%,var(--neon-purple) 120deg,var(--colour-grey-900) 0 180deg,var(--neon-purple) 0 240deg,var(--colour-grey-900) 0);
background-size: 150px calc(.866*150px);
opacity: 0.3;
transform: rotate(166deg);
z-index: -10;
box-shadow: 0px 0px 15px #fff; 

}*/
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
