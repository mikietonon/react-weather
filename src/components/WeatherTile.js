import IconDisplay from "./IconDisplay";
import { WiCelsius } from "react-icons/wi";

function WeatherTile({ weather, indexNum, getTime, ...rest }) {
    const getDay = (String) => {
        let date = String.slice(0 , 10);
        let dateNum = new Date(date).getDay();

        switch(dateNum) {
            case 0:
                return "Mon";
            case 1:
                return "Tue";
            case 2:
                return "Wed";
            case 3:
                return "Thu";
            case 4:
                return "Fri";
            case 5:
                return "Sat";
            case 6:
                return "Sun";
            default:
                return "";
        }
    };

    return (
        <div {...rest} className="cursor-pointer flex flex-col rounded-xl text-white text-xl w-[150px] transition hover:bg-slate-800 ease-in-out">
            <div className="flex text-4xl m-auto">
                <IconDisplay num={weather.DailyForecasts[indexNum][getTime].Icon} />
            </div>
            <div className="flex m-auto">
                <span className="ml-[10px] font-thin">{weather.DailyForecasts[indexNum].Temperature.Maximum.Value}</span>
                <WiCelsius className="ml-[-5px] mb-[5px] text-2xl" />
            </div>
            <div className="m-auto font-bold">
                {getDay(weather.DailyForecasts[indexNum].Date)}
            </div>
        </div>
    );
}

export default WeatherTile;