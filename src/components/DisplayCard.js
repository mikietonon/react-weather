import { IoLocationOutline } from "react-icons/io5";
import {
    WiCelsius, WiNa, WiDaySunny, WiDaySunnyOvercast, WiDayCloudyHigh,
    WiDayHaze, WiDayCloudy, WiCloudy, WiFog, WiShowers, WiDayShowers,
    WiThunderstorm, WiDayThunderstorm, WiDayRain, WiDaySnow, WiDaySnowWind, WiSnow, WiDust, 
    WiSleet, WiRainMix, WiHot, WiSnowflakeCold, WiStrongWind, WiNightClear, WiNightPartlyCloudy,
    WiNightCloudyHigh, WiNightFog, WiNightAltCloudy, WiNightShowers, WiNightThunderstorm, WiNightSnowWind
} from "react-icons/wi";

function DisplayCard({ weather, currentTemp, city }) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()]
    let dayName = weekday[d.getDay()];
    let dayOrdinal = getOrdinalNum(d.getDate());

    return (
        <div className="flex flex-col absolute z-30 text-neutral-100 p-3 w-[270px] h-[350px]">
            <div>
                <h1 className="font-bold text-3xl">{dayName}</h1>
                <h1 className="font-normal text-xl">{month} {dayOrdinal}</h1>
                <div className="flex items-center text-xl ml-[-3px] mt-[3px]">
                    <IoLocationOutline />
                    {city === "" ? (<h1 className="font-thin text-3xl"><WiNa /></h1>) : <h1 className="font-thin text-l">{city}</h1>}
                </div>
            </div>
            <div className="mt-auto">
                {currentTemp === null ? (<h1 className="text-8xl ml-[-10px] mb-[-7px]"><WiNa /></h1>) : <h1 className="text-8xl ml-[-10px] mb-[-7px]">{getWeatherIcon(currentTemp[0].WeatherIcon)}</h1>}
                <div className="flex items-center text-4xl">
                    {weather === null ? (<h1 className="font-bold text-4xl mr-[-10px]"><WiNa /></h1>) : <h1 className="font-bold text-4xl mr-[-10px]">{currentTemp[0].ApparentTemperature.Metric.Value}</h1>}
                    <WiCelsius className="mb-[5px]" />
                </div>
                {weather === null ? (<h1 className="font-thin text-3xl"><WiNa /></h1>) : <h1 className="font-thin text-3xl">{currentTemp[0].WeatherText}</h1>}
            </div>
        </div>
    );
}

const getOrdinalNum = ((n) => {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
});

const getWeatherIcon = ((num) => {
    switch (num) {
        case 1:
            return <WiDaySunny />;
        case 2:
            return <WiDaySunnyOvercast />;
        case 3 || 4:
            return <WiDayCloudyHigh />;
        case 5:
            return <WiDayHaze />;
        case 6:
            return <WiDayCloudy />;
        case 7 || 8:
            return <WiCloudy />;
        case 11:
            return <WiFog />;
        case 12:
            return <WiShowers />;
        case 13 || 14:
            return <WiDayShowers />;
        case 15:
            return <WiThunderstorm />;
        case 16 || 17:
            return <WiDayThunderstorm />;
        case 18:
            return <WiDayRain />;
        case 19 || 23:
            return <WiDaySnow />;
        case 20 || 21:
            return <WiDaySnowWind />;
        case 22:
            return <WiSnow />;
        case 24:
            return <WiDust />;
        case 25 || 26:
            return <WiSleet />;
        case 29:
            return <WiRainMix />;
        case 30:
            return <WiHot />;
        case 31:
            return <WiSnowflakeCold />;
        case 32:
            return <WiStrongWind />;
        case 33:
            return <WiNightClear />;
        case 34:
            return <WiNightPartlyCloudy />;
        case 35 || 36:
            return <WiNightCloudyHigh />;
        case 37:
            return <WiNightFog />;
        case 38:
            return <WiNightAltCloudy />;
        case 39 || 40:
            return <WiNightShowers />;
        case 41 || 42:
            return <WiNightThunderstorm />;
        case 43 || 44:
            return <WiNightSnowWind />;
        default:
            return <WiNa />;
    }
});

export default DisplayCard;