import axios from 'axios';
import { apiKey } from './apiKey';

export const searchCity = async (term) => {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
        params:{
            apikey: apiKey,
            q: term,
        },
    });
    return response.data[0].Key
};

export const searchWeather = async (cityKey) => {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}`, {
        params:{
            apikey: apiKey,
        },
    });
    return response.data
};
