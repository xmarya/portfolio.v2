import { FaInstagram, FaTiktok } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { SectionSubHeading } from "./Headings";


const StyledFooter = styled.footer`
  background-color: var(--colour-grey-800);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(45rem, 100%), 1fr));
  align-items: stretch;
  justify-content: stretch;
  row-gap: 4rem;
  padding: 1.6rem;

  & > * {
    border: var(--check);
    display: flex;
    justify-content: center;
  }

  p.text-lg {
    grid-column: 1 / -1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
;

const Brief = styled.div`
  container-type: inline-size;
  flex-direction: column;
  text-align: center;


  ${SectionSubHeading} {
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 100%;
    font-size: clamp(1.6rem, 2.5cqi, 2rem);
  }

  `
;

const SocialIcons = styled.ul`
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  svg {
    width: clamp(1.5rem, 2.5rem, 3.5rem);
    height: clamp(1.5rem, 2.5rem, 3.5rem);

    &:hover {
      fill: var(--neon-purple);
      transition: fill 0.15s ease-in;
    }
  }
  `
;

const PeakToNow = styled.div`
      grid-column: 1 / -1;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;

`;

const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: var(--colour-grey-500);
  opacity: 0.6;
  margin-block: 2rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Brief>
        <SectionSubHeading>Let's Collaborate!</SectionSubHeading>
        <p>Looking to create something special? <br/> I’m just an email away. Let’s build something amazing together.</p>
      </Brief>

      <SocialIcons>
        <Link to="https://www.instagram.com/marya.webfullstack" target="_blank">
          <FaInstagram />
        </Link>

        <Link to="https://www.tiktok.com/@marya.webfullstack" target="_blank">
          <FaTiktok />
        </Link>

        <Link to="https://github.com/xmarya/" target="_blank">
          <TbBrandGithubFilled />
        </Link>
      </SocialIcons>

      <PeakToNow>
        <div>state right now</div>
        <div>time/date</div>
        <div>shiran mada</div>
      </PeakToNow>

      <p className="text-lg italic max-w-full">
        <Divider/>
        built with a cup of coffee and a sprinkle of passion.
        <span>&copy;2024</span>
        </p>
    </StyledFooter>
  );
}
