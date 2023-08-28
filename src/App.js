import SearchBar from "./components/SearchBar";
import { searchCity, searchWeather } from "./api";

function App() {
    const handleSubmit = async (term) => {
        const cityKey = await searchCity(term);
        const forecast = await searchWeather(cityKey);

        console.log(forecast);
    }

    return(
        <div>
            <div>
                <label className="flex text-neutral-50 font-thin justify-center text-3xl">React Weather App</label>
                <SearchBar onSubmit={handleSubmit}/>
            </div>
        </div>
    );
}

export default App;