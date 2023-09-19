import ForecastCard from "./ForecastCard";
import DisplayCard from "./DisplayCard";
import InfoCard from "./InfoCard";
import { useState } from "react";

function MainCard({ image, weather, currentTemp, city, isLoading }) {
    const [indexNum, setIndexNum] = useState(0);
    const [getTime, setGetTime] = useState('Day');

    const skeleton = 'overflow-hidden relative space-y-5 rounded-2xl bg-gray-900' 
            + ' bg-gradient-to-r from-transparent via-gray-600 to-transparent p-4 shadow-xl'
            + ' shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite]'
            + ' before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent';

    if (isLoading) {
        return(
            <div className="w-full flex flex-col rounded-3xl bg-slate-900 bg-opacity-60 drop-shadow-glow lg:w-[890px] lg:flex-row md:w-[400px] md:flex-col sm:w-[400px] sm:flex-col">
                <div className="flex grow rounded-3xl w-full h-[150px] drop-shadow-sm lg:grow-0 lg:h-[350px] md:h-[150px] sm:h-[150px]">
                    <img src={image} className="absolute z-10 object-cover rounded-3xl w-full h-[150px] opacity-70 blur-[1px] lg:w-[270px] md:w-[400px] sm:w-[400px] lg:h-[350px] md:h-[150px] sm:h-[150px]" alt="images"/>
                    <div className="absolute z-20 rounded-3xl bg-gradient-to-br from-pink-500 to-yellow-500 w-full h-[150px] opacity-10 lg:w-[270px] md:w-[400px] sm:w-[400px] lg:h-[350px] md:h-[150px] sm:h-[150px]"/>
                    <DisplayCard weather={weather} currentTemp={currentTemp} city={city} />
                </div>
            <div>
            <div className="flex justify-end h-[220px]">
                    <div className={`${skeleton} w-full mt-2`}></div>
                </div>
                <div className="ml-0 mt-2 bg-slate-900 rounded-3xl w-full p-3 lg:w-[600px] lg:ml-3 md:w-[400px] md:ml-0 sm:w-[400px] sm:ml-0">
                    <div className={`${skeleton} h-full`}></div>
                </div>
            </div>
        </div>
        );
    }

    return(
        <div className="w-full flex flex-col rounded-3xl bg-slate-900 bg-opacity-60 drop-shadow-glow lg:w-[890px] lg:flex-row md:w-[400px] md:flex-col sm:w-[400px] sm:flex-col">
            <div className="flex grow rounded-3xl w-full h-[150px] drop-shadow-sm lg:grow-0 lg:w-[270px] lg:h-[350px] md:h-[150px] sm:h-[150px]">
                <img src={image} className="absolute z-10 object-cover rounded-3xl w-full h-[150px] opacity-70 blur-[1px] lg:w-[270px] md:w-[400px] sm:w-[400px] lg:h-[350px] md:h-[150px] sm:h-[150px]" alt="images"/>
                <div className="absolute z-20 rounded-3xl bg-gradient-to-br from-pink-500 to-yellow-500 w-full h-[150px] opacity-10 lg:w-[266px] md:w-[400px] sm:w-[400px] lg:h-[350px] md:h-[150px] sm:h-[150px]"/>
                <DisplayCard weather={weather} currentTemp={currentTemp} city={city} />
            </div>
            <div>
                <div className="flex justify-end h-[220px]">
                    <InfoCard weather={weather} indexNum={indexNum} setGetTime={setGetTime}/>
                </div>
                <div className="grow ml-0 mt-2 bg-slate-900 rounded-3xl w-full p-3 lg:w-[600px] lg:mr-[12px] lg:ml-3 md:w-[400px] md:ml-0 sm:w-[400px] sm:ml-0">
                    <ForecastCard weather={weather} setIndexNum={setIndexNum} getTime={getTime}/>
                </div>
            </div>
        </div>
    );
}

export default MainCard;