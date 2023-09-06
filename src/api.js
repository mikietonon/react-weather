import axios from 'axios';
import { apiKey, apiKey2 } from './apiKey';

export const searchCity = async (term) => {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
        params:{
            q: term,
            apikey: apiKey,
        },
    });
    return response.data[0];
};

export const searchWeather = async (cityKey) => {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}`, {
        params:{
            metric: true,
            details: true,
            apikey: apiKey,
        },
    });
    return response.data;
};

export const currentWeather = async (cityKey) => {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`, {
        params:{
            apikey: apiKey,
            details: true,
            language: `en-us`,
        }
    });
    return response.data;
}

export const getPhoto = async (photoTerm) => {
    const response = await axios.get(`https://api.unsplash.com/photos/random/`, {
        headers: {
            Authorization: `Client-ID ${apiKey2}`
        },
        params: {
            query: photoTerm,
            orientation: `portrait`,
            
        },
    });
    return response.data.links.download;
};