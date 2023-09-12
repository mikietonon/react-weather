//Scrolling text sourced from: https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
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
    if (weather === null) {
        return (
            <div className="flex flex-col grow ml-[12px] mr-[12px] font-bold text-white max-w-[600px]">
                <div className="text-lg grow">
                    <div className='rounded-full relative flex overflow-x-hidden'>
                        <div className='animate-marquee whitespace-nowrap'>
                            <span className='mx-10'>Enter a location.</span>
                            <span className='mx-10'>-</span>
                            <span className='mx-10'>Enter a location.</span>
                            <span className='mx-10'>-</span>
                            <span className='mx-10'>Enter a location.</span>
                            <span className='mx-10'>-</span>
                        </div>
                        <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                            <span className='mx-10'>Enter a location.</span>
                            <span className='mx-10'>-</span>
                            <span className='mx-10'>Enter a location.</span>
                            <span className='mx-10'>-</span>
                            <span className='mx-10'>Enter a location.</span>
                            <span className='mx-10'>-</span>
                        </div>
                    </div>
                    <p className='flex'>
                        <h1 className='mr-auto'>Wind:</h1>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>Air Quality:</h1>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>UV Index:</h1>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>High:</h1>
                    </p>
                    <p className='flex'>
                        <h1 className='mr-auto'>Low:</h1>
                    </p>
                </div>
                <div className="flex grow">
                    <div className='grow'>
                        <WiSunrise className='text-4xl m-auto'/>
                        <h1 className='text-center'>.</h1>
                    </div>
                    <div className='grow'>
                        <WiSunset className='text-4xl m-auto'/>
                        <h1 className='text-center'>.</h1>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="flex flex-col grow ml-[12px] mr-[12px] font-bold text-white max-w-[600px]">
                <div className="text-lg grow">
                        {(weather.DailyForecasts[iconNum].Day.LongPhrase).length <= 20 ? //add extra span to remove pop in on short character long phrases
                                        <div className='rounded-full relative flex overflow-x-hidden'>
                                            <div className='animate-marquee whitespace-nowrap '>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                            </div>
                                            <div className='absolute top-0 animate-marquee2 whitespace-nowrap '>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                            </div>
                                        </div>
                         :
                                        <div className='rounded-full relative flex overflow-x-hidden'>
                                            <div className='animate-marquee whitespace-nowrap '>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                            </div>
                                            <div className='absolute top-0 animate-marquee2 whitespace-nowrap '>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                                <span className='mx-10'>{weather.DailyForecasts[iconNum].Day.LongPhrase}</span>
                                                <span className='mx-10'>-</span>
                                            </div>
                                        </div>
                        }
                    
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
                <div className="flex grow">
                    <div className='grow'>
                        <WiSunrise className='text-4xl m-auto'/>
                        <h1 className='text-center'>{converter(weather.DailyForecasts[iconNum].Sun.Rise)}</h1>
                    </div>
                    <div className='grow'>
                        <WiSunset className='text-4xl m-auto'/>
                        <h1 className='text-center'>{converter(weather.DailyForecasts[iconNum].Sun.Set)}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCard;