import MainCard from "./components/MainCard";
import SearchBar from "./components/SearchBar";
import { getPhoto, searchCity, searchWeather, currentWeather } from "./api";
import { useEffect, useState } from "react";

function App() {
    const [image, setImage] = useState(null);
    const [weather, setWeather] = useState("null");
    const [currentTemp, setCurrentTemp] = useState("null");
    const [city, setCity] = useState('');

    const handleSubmit = async (term) => {
        const getCityKey = await searchCity(term);
        const getForecast = await searchWeather(getCityKey.Key);
        const getCurrentTemp = await currentWeather(getCityKey.Key);

        setCity(getCityKey.EnglishName + ", " + getCityKey.Country.ID);
        setWeather(getForecast);
        setCurrentTemp(getCurrentTemp)
    }

    useEffect(() => {
        const photoTerm = ["mountains", "trees", "nature", "city"];
        const fetchImage = async () => {
            const bgPhoto = await getPhoto(photoTerm[Math.floor(Math.random()*4)])

            setImage(bgPhoto);
        }

        fetchImage()
            .catch(console.error);
    }, [])

    return(
        <div>
            <label className="flex text-neutral-50 font-thin justify-center text-3xl">React Weather App</label>
            <SearchBar onSubmit={handleSubmit}/>
            <div className="flex justify-center">
                <MainCard image={image} weather={weather} currentTemp={currentTemp} city={city}/>
            </div>
        </div>
    );
}

export default App;
