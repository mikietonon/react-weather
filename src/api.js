import axios from "axios";
import { apiKey, apiKey2 } from "./apiKey";

export const searchCity = async (term) => {
	const response = await axios
		.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
			params: {
				q: term,
				apikey: apiKey,
			},
		})
		.catch(function (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log("error at the response");
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
                return error.response.status;
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log("error at the request");
				console.log(error.request);

                return 503;
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error", error.message);
			}
		});
	//guard statement for errors
	if (response >= 400) {
		return response;
	}

	return response.data[0];
};

export const searchWeather = async (cityKey) => {
	const response = await axios
		.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}`, {
			params: {
				metric: true,
				details: true,
				apikey: apiKey,
			},
		})
		.catch(function (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log("error at the response");
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log("error at the request");
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error", error.message);
			}

			return null;
		});

	//guard statement for errors
	if (response === null) {
		return null;
	}

	return response.data;
};

export const currentWeather = async (cityKey) => {
	const response = await axios
		.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`, {
			params: {
				apikey: apiKey,
				details: true,
				language: `en-us`,
			},
		})
		.catch(function (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log("error at the response");
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log("error at the request");
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error", error.message);
			}

			return null;
		});

	//guard statement for errors
	if (response === null) {
		return null;
	}
	return response.data;
};

export const getPhoto = async (photoTerm) => {
	const response = await axios
		.get(`https://api.unsplash.com/photos/random/`, {
			headers: {
				Authorization: `Client-ID ${apiKey2}`,
			},
			params: {
				query: photoTerm,
				orientation: `portrait`,
			},
		})
		.catch(function (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log("error at the response");
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log("error at the request");
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error", error.message);
			}

			return null;
		});

	//guard statement for errors
	if (response === null) {
		return null;
	}

	return response.data.links.download;
};
