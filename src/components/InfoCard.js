import { WiCelsius, WiSunrise, WiSunset, WiMoonrise, WiMoonset  } from 'react-icons/wi';
import ToggleSwitch from './ToggleSwitch';
import ScrollingText from './ScrollingText';
import { useState } from 'react';

function InfoCard({ weather, indexNum, setGetTime }) {
    const [checkDay, setCheckDay] = useState('Day');

    const handleClick = () => {
        if (checkDay === 'Day') {
            setCheckDay('Night');
            setGetTime('Night');
        } else {
            setCheckDay('Day');
            setGetTime('Day');
        }
    };

    const converter = (String) => {
        let hour = String.slice(11, 13);
        let minute = String.slice(14, 16);

        let AmOrPm = hour >= 12 ? 'PM' : 'AM';
        hour = (hour % 12) || 12;
        
        return hour + ':' + minute + ' ' + AmOrPm;
    };

    const checkScrollingText = () => {
        if (weather === null) {
            return <ScrollingText text={"Enter a location."}/>;
            
        } else {
            return <ScrollingText text={weather.DailyForecasts[indexNum][checkDay].LongPhrase}/>;
        }
    };

    const checkWeatherInfo = () => {
        if (weather === null) {
            return(
                <>
                    <span className='flex'>
                        <h1 className='mr-auto'>Wind:</h1>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>Air Quality:</h1>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>UV Index:</h1>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>High:</h1>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>Low:</h1>
                    </span>
                </>
            );
        } else  {
            return(
                <>
                    <span className='flex'>
                        <h1 className='mr-auto'>Wind:</h1>
                        <h1 className='font-thin'>{weather.DailyForecasts[indexNum][checkDay].Wind.Speed.Value} {weather.DailyForecasts[indexNum][checkDay].Wind.Speed.Unit} - {weather.DailyForecasts[indexNum][checkDay].Wind.Direction.English}</h1>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>Air Quality:</h1>
                        <h1 className='font-thin'>{weather.DailyForecasts[indexNum].AirAndPollen[0].Category}</h1>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>UV Index:</h1>
                        <h1 className='font-thin'>{weather.DailyForecasts[indexNum].AirAndPollen[5].Category}</h1>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>High:</h1>
                        <h1 className='font-thin flex flex-row'>{weather.DailyForecasts[indexNum].Temperature.Maximum.Value}</h1>
                        <WiCelsius className="ml-[-5px] text-2xl"/>
                    </span>
                    <span className='flex'>
                        <h1 className='mr-auto'>Low:</h1>
                        <h1 className='font-thin flex flex-row'>{weather.DailyForecasts[indexNum].Temperature.Minimum.Value}</h1>
                        <WiCelsius className="ml-[-5px] text-2xl"/>
                    </span>
                </>
            );
        }
    };

    const checkRiseSet = () => {
        return(
            <>
                <div className='grow'>
                    {checkDay === 'Day' ? <WiSunrise className='text-4xl m-auto'/> : <WiMoonrise className='text-4xl m-auto'/>}
                    <h1 className='text-center'>{weather === null ? `.` : (checkDay === 'Day') ? `${converter(weather.DailyForecasts[indexNum].Sun.Rise)}` : `${converter(weather.DailyForecasts[indexNum].Moon.Rise)}`}</h1>
                </div>
                <div className='grow'>
                    {checkDay === 'Day' ? <WiSunset className='text-4xl m-auto'/> : <WiMoonset className='text-4xl m-auto'/>}
                    <h1 className='text-center'>{weather === null ? `.` : (checkDay === 'Day') ? `${converter(weather.DailyForecasts[indexNum].Sun.Set)}` : `${converter(weather.DailyForecasts[indexNum].Moon.Set)}`}</h1>
                </div>
            </>
        );
    };

    return(
        <div className="flex flex-col grow ml-[12px] mr-[12px] font-bold text-white max-w-[600px]">
            <div className="text-lg grow">
                <span className='flex'>
                    {checkScrollingText()}
                    <span className="mt-[3px] ml-[10px]">
                        {checkDay === 'Day' ? <ToggleSwitch onClick={handleClick} dayIn dayOut /> : <ToggleSwitch onClick={handleClick} nightIn nightOut/>}
                    </span>
                </span>
                {checkWeatherInfo()}
            </div>
            <div className="flex grow">
                {checkRiseSet()}
            </div>
        </div>
    );
}

export default InfoCard;