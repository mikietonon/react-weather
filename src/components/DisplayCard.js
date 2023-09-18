import { IoLocationOutline } from "react-icons/io5";
import { WiCelsius, WiNa } from "react-icons/wi";
import IconDisplay from "./IconDisplay";

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
                {currentTemp === null ? (<h1 className="text-8xl ml-[-10px] mb-[-7px]"><WiNa /></h1>) : <h1 className="text-8xl ml-[-10px] mb-[-7px]"><IconDisplay num={currentTemp[0].WeatherIcon}/></h1>}
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

export default DisplayCard;