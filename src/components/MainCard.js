import ForecastCard from "./ForecastCard";
import DisplayCard from "./DisplayCard";
import InfoCard from "./InfoCard";

function MainCard({ image, weather, currentTemp, city }) {

    return(
        <div className="flex flex-row rounded-3xl border-1 border-red-500 bg-slate-900 drop-shadow-2xl w-[900px] h-[350px]">
            <div className="rounded-3xl border-1 border-red-500 w-[270px] h-[347px] drop-shadow-sm">
                <img src={image} className="absolute z-10 object-cover rounded-3xl w-[270px] h-[350px] opacity-70 blur-[1px]" alt="images"/>
                <div className="absolute z-20 rounded-3xl bg-gradient-to-br from-pink-500 to-yellow-500 w-[270px] h-[350px] opacity-10"/>
                <DisplayCard weather={weather} currentTemp={currentTemp} city={city} />
            </div>
            <div className="border-1 border-yellow-500">
                <div className="flex justify-end h-[220px] border-1 border-blue-500 mr-3 pt-1">
                    <InfoCard />
                </div>
                <div className="m-3 border-1 border-green-500 bg-slate-800 rounded-3xl h-[100px] w-[600px] p-3">
                    <ForecastCard />
                </div>
            </div>
        </div>
    );
}

export default MainCard;