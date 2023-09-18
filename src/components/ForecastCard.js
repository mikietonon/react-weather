import WeatherTile from "./WeatherTile";

function ForecastCard({ weather, setIndexNum, getTime }) {
    if (weather === null) {
        return <div className="h-[90px]"></div>
    }

    return(
        <div className="flex flex-row gap-2 mt-auto">
            <WeatherTile onClick={() => setIndexNum(0)} weather={weather} indexNum={0} getTime={getTime} />
            <WeatherTile onClick={() => setIndexNum(1)} weather={weather} indexNum={1} getTime={getTime} />
            <WeatherTile onClick={() => setIndexNum(2)} weather={weather} indexNum={2} getTime={getTime} />
            <WeatherTile onClick={() => setIndexNum(3)} weather={weather} indexNum={3} getTime={getTime} />
            <WeatherTile onClick={() => setIndexNum(4)} weather={weather} indexNum={4} getTime={getTime} />
        </div>
    );
}

export default ForecastCard;