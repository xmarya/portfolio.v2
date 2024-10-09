const apiKey = import.meta.env.VITE_OPEN_WEATHER;

//https://api.openweathermap.org/data/2.5/weather?q=jeddah&appid=51fa681dbbdebbeef979475c8c6b68e3

const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=jeddah&appid=${apiKey}&units=metric`;

export default async function getWeatherDate() {

    const data = await fetch(apiLink);
    const {weather, main, timezone} = await data.json();

    const localTimeDate = convertTimezone(timezone);
    return {weather, tempreture: main.temp, localTimeDate};
}

function convertTimezone(timezone) {

// Convert it to milliseconds
const timezoneOffsetMinutes = timezone / 60;

// Get the current UTC time
const nowUTC = new Date();

// Apply the timezone offset by adding the offset (since it is ahead of UTC)
const localTime = new Date(nowUTC.getTime() + timezoneOffsetMinutes);

// Format the date as full day name, day on month, full month name, year, hour:minute
const formattedDateTime = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',   // Full day name
  day: 'numeric',    // Day of the month
  month: 'long',     // Full month name
  year: 'numeric',   // Full year
  hour: '2-digit',   // 2-digit hour
  minute: '2-digit', // 2-digit minute
  hour12: true      // Use 24-hour format (set to true for 12-hour format with AM/PM)
}).format(localTime);

console.log(formattedDateTime);

return formattedDateTime.split("at");

}