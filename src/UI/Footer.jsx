import { FaInstagram, FaTiktok } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { SectionSubHeading } from "./Headings";
import { useEffect } from "react";
import getWeatherDate from "../helpers/getWeather";
import { Divider } from "./Divider";
import { useState } from "react";
import { Spinner } from "./Spinner";


const StyledFooter = styled.footer`
  background-color: var(--colour-grey-800);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(45rem, 100%), 1fr));
  align-items: stretch;
  justify-content: stretch;
  row-gap: clamp(2rem, 6vw, 10rem); 

  padding: 1.6rem;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.text-lg {
    grid-column: 1 / -1;
    flex-direction: column;
  }
`
;

const Brief = styled.div`
  container-type: inline-size;
  flex-direction: column;
  text-align: center;
  padding-top: 1.5rem;


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
  gap: 2.5rem;

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

      flex-wrap: wrap;
      justify-content: space-evenly;

      & > * {
    flex-grow: 1; // making each of the children has an equal width to avoid the jumping layout when the api data has arrived.
  }

  @media (max-width: 37.5em) {
    // 600px
    flex-direction: column;
    gap: 2.5rem;
  }

`;

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: var(--lg-text);

  span {
    text-transform: capitalize;
  }
`;


export default function Footer() {

  const [widgets, setWidgets] = useState({});

  useEffect(() => {
    async function fetchWidgetsData() {
      const {weather, tempreture, localTimeDate} = await getWeatherDate();
      setWidgets({weatherToday: weather[0]?.description, tempreture, date: localTimeDate[0], time: localTimeDate[1]});
    }

    fetchWidgetsData(); // this only for the fisrt render

    // this is triggered every 1 minute to demonstrate the changing of the time after the first render.
    const widgetsInterval = setInterval(fetchWidgetsData, 60000); // means one minute.

    return () => clearInterval(widgetsInterval);
    
  });

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
        <Widget>
          <span className="text-2xl">state right now</span>
        </Widget>
        <Widget>
          {
            !widgets?.time ? 
            <Spinner/>
            :
            <>
            <span>{widgets?.time.toUpperCase()}</span>
            <span className="text-2xl">{widgets?.date}</span>
            </>
          }
        </Widget>
        <Widget>
        {
            !widgets?.time ? 
            <Spinner/>
            :
            <>
          <span>{Math.round(widgets?.tempreture)}°C</span>
          <span className="text-2xl">{widgets?.weatherToday}</span>
          </>

        }
        </Widget>
      </PeakToNow>

      <p className="text-lg italic max-w-full">
        <Divider type="horizontal"/>
        built with a cup of coffee and a sprinkle of passion.
        <span>&copy;2024</span>
      </p>
    </StyledFooter>
  );
}
