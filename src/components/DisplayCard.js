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
        <div className="flex w-full flex-row z-30 text-neutral-100 p-3 h-auto lg:flex-col md:flex-row sm:flex-row lg:items-start md:h-auto sm:h-auto">
            <span className="flex flex-col gap-4 lg:gap-0 md:gap-4 sm:gap-4">
                <h1 className="font-bold text-3xl">{dayName}</h1>
                <h1 className="font-normal text-xl">{month} {dayOrdinal}</h1>
                <div className="flex items-center text-xl ml-[-3px] mt-[3px]">
                    <IoLocationOutline />
                    {city === "" ? (<h1 className="font-thin text-3xl"><WiNa /></h1>) : <h1 className="font-thin text-xl">{city}</h1>}
                </div>
            </span>
            <span className="flex flex-col items-end mt-0 ml-auto gap-1 lg:mt-auto md:mt-0 sm:mt-0 lg:ml-0 md:ml-auto sm:ml-auto lg:items-start md:items-end sm:items-end lg:gap-0 md:gap-1 sm:gap-1">
                {currentTemp === null ? (<h1 className="text-7xl ml-[-10px] mb-[-7px] mr-[-10px] lg:text-8xl md:text-7xl sm:text-7xl lg:mr-0 md:mr-[-10px] sm:mr-[-10px]"><WiNa /></h1>) : <h1 className="text-7xl ml-[-10px] mb-[-7px] mr-[-10px] lg:text-8xl md:text-7xl sm:text-7xl lg:mr-0 md:mr-[-10px] sm:mr-[-10px]"><IconDisplay num={currentTemp[0].WeatherIcon}/></h1>}
                <div className="flex items-center text-2xl mr-[-10px] lg:text-4xl md:text-2xl sm:text-2xl lg:mr-0 md:mr-[-10px] sm:mr-[-10px]">
                    {weather === null ? (<h1 className="font-bold text-xl mr-[-10px] lg:text-4xl md:text-xl sm:text-xl"><WiNa /></h1>) : <h1 className="font-bold text-xl mr-[-10px] lg:text-4xl md:text-xl sm:text-xl">{currentTemp[0].ApparentTemperature.Metric.Value}</h1>}
                    <WiCelsius className="mb-[5px]" />
                </div>
                {weather === null ? (<h1 className="font-thin text-2xl lg:text-3xl md:text-xl sm:text-xl"><WiNa /></h1>) : <h1 className="font-thin text-xl lg:text-3xl md:text-xl sm:text-xl">{currentTemp[0].WeatherText}</h1>}
            </span>
        </div>
    );
}

const getOrdinalNum = ((n) => {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
});

export default DisplayCard;