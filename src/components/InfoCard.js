import { WiCelsius, WiSunrise, WiSunset, WiMoonrise, WiMoonset  } from 'react-icons/wi';

function InfoCard({ weather }) {
    //TODO:
    //add a radio button to trigger day and night info
    const converter = (String) => {
        let hour = String.slice(11, 13);
        let minute = String.slice(14, 16);

        let AmOrPm = hour >= 12 ? 'PM' : 'AM';
        hour = (hour % 12) || 12;
        
        return hour + ':' + minute + ' ' + AmOrPm;
    };

    const iconNum = 1;
    console.log(weather)
    if (weather === 'null') {
        return <h1>Enter a location.</h1>
    } else {
        return(
            <div className="flex flex-col grow ml-[12px] mr-auto font-bold text-white">
                <div className="text-lg md:text-base border-2 border-red-500">
                    <h1 className='text-center'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</h1>
                    <p className='flex'>
                        <h1 className='mr-auto'>Wind:</h1>
                        <h1 className='font-thin'>{weather.DailyForecasts[iconNum].Day.Wind.Speed.Value} {weather.DailyForecasts[iconNum].Day.Wind.Speed.Unit} - {weather.DailyForecasts[iconNum].Day.Wind.Direction.English}</h1>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>Air Quality:</h1>
                        <h1 className='font-thin'>{weather.DailyForecasts[iconNum].AirAndPollen[0].Category}</h1>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>UV Index:</h1>
                        <h1 className='font-thin'>{weather.DailyForecasts[iconNum].AirAndPollen[5].Category}</h1>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>High:</h1>
                        <h1 className='font-thin flex flex-row'>{weather.DailyForecasts[iconNum].Temperature.Maximum.Value}</h1>
                        <WiCelsius className="ml-[-5px] text-2xl"/>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>Low:</h1>
                        <h1 className='font-thin flex flex-row'>{weather.DailyForecasts[iconNum].Temperature.Minimum.Value}</h1>
                        <WiCelsius className="ml-[-5px] text-2xl"/>
                    </p>
                </div>
                <div className="grow border-2 border-green-500">
                    <h1>Sunrise: {converter(weather.DailyForecasts[iconNum].Sun.Rise)}</h1>
                    <h1>Sunset: {converter(weather.DailyForecasts[iconNum].Sun.Set)}</h1>
                </div>
            </div>
        );
    }
}

export default InfoCard;