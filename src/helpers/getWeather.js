import { useQuery } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_OPEN_WEATHER;

/* CHANGE LATER: to be useQuery hook in order to reflect the lang parameter changing in the interface */

//https://api.openweathermap.org/data/2.5/weather?q=jeddah&appid=51fa681dbbdebbeef979475c8c6b68e3

const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=jeddah&appid=${apiKey}&units=metric`;

export default function useWeather(language) {
  const {isLoading, data, error} = useQuery({
    queryKey:["language", language],
    queryFn: () => getWeatherDate(language)
  });

  return {isLoading, data, error};
}

async function getWeatherDate(language) {

    const data = await fetch(apiLink.concat(`&lang=${language}`));
    const {weather, main, timezone} = await data.json();

    const localTimeDate = convertTimezone(timezone, language);

    const weatherToday = weather[0]?.description;
    const date =  localTimeDate[0];
    const time =  localTimeDate[1];

    return {weatherToday, tempreture: main.temp, date, time};
}

function convertTimezone(timezone, language) {
const splitter = language === "en" ? " at " : "في";
// Convert it to milliseconds
const timezoneOffsetMinutes = timezone / 60;

// Get the current UTC time
const nowUTC = new Date();

// Apply the timezone offset by adding the offset (since it is ahead of UTC)
const localTime = new Date(nowUTC.getTime() + timezoneOffsetMinutes);

// Format the date as full day name, day on month, full month name, year, hour:minute
const formattedDateTime = new Intl.DateTimeFormat(language, {
  weekday: 'long',   // Full day name
  day: 'numeric',    // Day of the month
  month: 'long',     // Full month name
  year: 'numeric',   // Full year
  hour: '2-digit',   // 2-digit hour
  minute: '2-digit', // 2-digit minute
  hour12: true      // Use 24-hour format (set to true for 12-hour format with AM/PM)
}).format(localTime);

return formattedDateTime.split(splitter);

}