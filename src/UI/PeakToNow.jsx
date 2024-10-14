import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import useWeather from "../helpers/getWeather";
import { useLanguageContext } from "../helpers/LanguageContext";
import { useWorkStateContext, WorkStateProvider } from "../helpers/WorkStateContext";
import { Spinner } from "./Spinner";
import { dictionary } from "../data/dictionary";

const WidgetsContainer = styled.div`
  grid-column: 1 / -1;
  flex-wrap: wrap;

  & > * {
    flex-grow: 1; // making each of the children has an equal width to avoid the jumping layout when the api data has arrived.
  }

  span {
    text-transform: capitalize;
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
`;

const pulse = keyframes`
    to {
        filter: drop-shadow(0 0.1rem 0.5rem var(--state-colour));
    }
`;

export const WorkStateWidget = styled.div`
    --state-colour: ${props => props.state === "busy" ? "var(--neon-red)" : "var(--neon-green)"};
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        display: block;
        position: relative;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        background-color: var(--state-colour);
        margin-inline: 0.4rem;

        filter: drop-shadow(0 0.1rem 0.1rem var(--state-colour));

        animation: ${pulse} 1.5s infinite ease-out;
    }
`;


export default function PeakToNow() {
  const { language } = useLanguageContext();
  const {workState} = useWorkStateContext();
  const { footer } = dictionary;

  const {isLoading, data, error} = useWeather(language);

  /* OLD CODE (leaved for reference): BEFORE USING REACT-QUERY
  // useEffect(() => {
    //   async function fetchWidgetsData() {
      //     const { weather, tempreture, localTimeDate } = await getWeatherDate(language);
      //     setWidgets({
        //       weatherToday: weather[0]?.description,
        //       tempreture,
        //       date: localTimeDate[0],
        //       time: localTimeDate[1],
        //     });
        //   }
        
        //   fetchWidgetsData(); // this only for the fisrt render
        
        //   // this is triggered every 1 minute to demonstrate the changing of the time after the first render.
        //   const widgetsInterval = setInterval(fetchWidgetsData, 60000); // means one minute.
        
        //   return () => clearInterval(widgetsInterval);
        // }, []);
        
        */
    
        return (
        <WidgetsContainer>
            <WorkStateWidget state={workState}>
            <span className="text-2xl">
                {footer.workState[workState][language]}
            </span>
            </WorkStateWidget>

            <Widget>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                    <span>{data?.time.toUpperCase()}</span>
                    <span className="text-2xl">{data?.date}</span>
                    </>
                )}
            </Widget>

            <Widget>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                    <span>{Math.round(data?.tempreture)}°C</span>
                    <span className="text-2xl">{data?.weatherToday}</span>
                    </>
                )}
            </Widget>
        </WidgetsContainer>
    )
}

