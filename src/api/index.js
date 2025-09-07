import currentWeather from './current-weather.json';
import dailyForecast from './daily-forecast.json';
import hourlyForecast from './hourly-forecast.json';

function getcurrentWeather() {
    return currentWeather.current;
}

function getDailyForecast() {
    return dailyForecast.daily.date;
}

function getHourlyForecast() {
    return hourlyForecast.hourly.date;
}

export { getcurrentWeather, getDailyForecast, getHourlyForecast };
