import axios from 'axios';

const API_KEY = 'cb2a79a819347ff0733984074f78632d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = ROOT_URL + `&q=${city},us`;

    // ajax request is async naturally, and get method return just promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}