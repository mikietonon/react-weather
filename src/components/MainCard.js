import ForecastCard from "./ForecastCard";
import DisplayCard from "./DisplayCard";
import InfoCard from "./InfoCard";
import { useState } from "react";
import className from 'classnames';

function MainCard({ image, weather, currentTemp, city, isLoading }) {
    const [indexNum, setIndexNum] = useState(0);
    const [getTime, setGetTime] = useState('Day');

    const skeleton = 'overflow-hidden relative space-y-5 rounded-2xl bg-gray-900' 
            + ' bg-gradient-to-r from-transparent via-gray-600 to-transparent p-4 shadow-xl'
            + ' shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite]'
            + ' before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent';

    if (isLoading) {
        return(
            <div className="flex flex-row rounded-3xl bg-slate-900 bg-opacity-60 drop-shadow-glow w-[890px]">
                <div className="rounded-3xl min-w-[270px] h-[350px] drop-shadow-sm">
                    <img src={image} className="absolute z-10 object-cover rounded-3xl w-[270px] h-[350px] opacity-70 blur-[1px]" alt="images"/>
                    <div className="absolute z-20 rounded-3xl bg-gradient-to-br from-pink-500 to-yellow-500 w-[270px] h-[350px] opacity-10"/>
                    <DisplayCard weather={weather} currentTemp={currentTemp} city={city} />
                </div>
            <div>
            <div className="flex justify-end h-[220px]">
                    <div className={`${skeleton} w-full mt-2 ml-3`}></div>
                </div>
                <div className="ml-3 mt-2 bg-slate-900 rounded-3xl w-[600px] h-[115px]">
                    <div className={`${skeleton} h-full`}></div>
                </div>
            </div>
        </div>
        );
    }

    return(
        <div className="flex flex-row rounded-3xl bg-slate-900 bg-opacity-60 drop-shadow-glow w-[890px]">
            <div className="rounded-3xl min-w-[270px] h-[350px] drop-shadow-sm">
                <img src={image} className="absolute z-10 object-cover rounded-3xl w-[270px] h-[350px] opacity-70 blur-[1px]" alt="images"/>
                <div className="absolute z-20 rounded-3xl bg-gradient-to-br from-pink-500 to-yellow-500 w-[270px] h-[350px] opacity-10"/>
                <DisplayCard weather={weather} currentTemp={currentTemp} city={city} />
            </div>
            <div>
                <div className="flex justify-end h-[220px]">
                    <InfoCard weather={weather} indexNum={indexNum} setGetTime={setGetTime}/>
                </div>
                <div className="ml-3 mt-2 bg-slate-900 rounded-3xl w-[600px] p-3">
                    <ForecastCard weather={weather} setIndexNum={setIndexNum} getTime={getTime}/>
                </div>
            </div>
        </div>
    );
}

export default MainCard;