import MainCard from "./components/MainCard";
import SearchBar from "./components/SearchBar";
import { getPhoto, searchCity, searchWeather, currentWeather } from "./api";
import { useEffect, useState } from "react";

function App() {
	const [image, setImage] = useState(null);
	const [weather, setWeather] = useState(null);
	const [currentTemp, setCurrentTemp] = useState(null);
	const [city, setCity] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (term) => {
		setIsLoading(true);
		//logic for checking errors before continuing with other api calls 
		if (term === '' || term === null || term === undefined) { return alert("ERROR: Please enter a valid location!")}
		const getCityKey = await searchCity(term);
		if (getCityKey >= 400 && getCityKey <= 499) {
			return alert(`ERROR: ${getCityKey}... Something went wrong, try again later!`);
		} else if (getCityKey >= 500) {
            return alert(`ERROR: ${getCityKey}... Weather API is down or out of requests!`);
        } else if (getCityKey === undefined) {
			return alert("ERROR: Please enter a valid location!");
		}

		const getForecast = await searchWeather(getCityKey.Key);
		const getCurrentTemp = await currentWeather(getCityKey.Key);

		setCity(getCityKey.EnglishName + ", " + getCityKey.Country.ID);
		setWeather(getForecast);
		setCurrentTemp(getCurrentTemp);
		setIsLoading(false);
	};

	useEffect(() => { //making sure we only call this API upon the page loading and not any other time
		const photoTerm = ["mountains", "landscape", "nature"];
		const fetchImage = async () => {
			const bgPhoto = await getPhoto(photoTerm[Math.floor(Math.random() * 3)]);

			setImage(bgPhoto);
		};

		fetchImage().catch(console.error);
	}, []);

	return (
		<div className="mt-[80px]">
			<div className="flex justify-center">
				<label className="text-neutral-50 font-thin hover:font-bold text-5xl mb-[80px]">
					React Weather App
				</label>
			</div>
			<SearchBar onSubmit={handleSubmit} />
			<div className="flex justify-center">
				<MainCard
					image={image}
					weather={weather}
					currentTemp={currentTemp}
					city={city}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}

export default App;
