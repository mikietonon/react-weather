import ForecastCard from "./ForecastCard";
import DisplayCard from "./DisplayCard";
import InfoCard from "./InfoCard";

function MainCard({ image, weather, currentTemp, city }) {

    return(
        <div className="flex flex-row rounded-3xl bg-slate-900 bg-opacity-60 drop-shadow-2xl w-[900px]">
            <div className="rounded-3xl min-w-[270px] h-[350px] drop-shadow-sm">
                <img src={image} className="border-2 border-thin border-neutral-100 absolute z-10 object-cover rounded-3xl w-[270px] h-[350px] opacity-70 blur-[1px]" alt="images"/>
                <div className="absolute z-20 rounded-3xl bg-gradient-to-br from-pink-500 to-yellow-500 w-[270px] h-[350px] opacity-10"/>
                <DisplayCard weather={weather} currentTemp={currentTemp} city={city} />
            </div>
            <div>
                <div className="flex justify-end h-[220px]">
                    <InfoCard weather={weather}/>
                </div>
                <div className="m-3 bg-slate-900 bg-opacity-50 drop-shadow-xl rounded-3xl h-[100px] w-[600px] p-3">
                    <ForecastCard />
                </div>
            </div>
        </div>
    );
}

export default MainCard;