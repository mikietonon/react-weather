import {
    WiNa, WiDaySunny, WiDaySunnyOvercast, WiDayCloudyHigh,
    WiDayHaze, WiDayCloudy, WiCloudy, WiFog, WiShowers, WiDayShowers,
    WiThunderstorm, WiDayThunderstorm, WiDayRain, WiDaySnow, WiDaySnowWind, WiSnow, WiDust, 
    WiSleet, WiRainMix, WiHot, WiSnowflakeCold, WiStrongWind, WiNightClear, WiNightPartlyCloudy,
    WiNightCloudyHigh, WiNightFog, WiNightAltCloudy, WiNightShowers, WiNightThunderstorm, WiNightSnowWind
} from "react-icons/wi";

function IconDisplay({ num }) {
    switch (num) {
        case 1:
            return <WiDaySunny />;
        case 2:
            return <WiDaySunnyOvercast />;
        case 3:
        case 4:
            return <WiDayCloudyHigh />;
        case 5:
            return <WiDayHaze />;
        case 6:
            return <WiDayCloudy />;
        case 7:
        case 8:
            return <WiCloudy />;
        case 11:
            return <WiFog />;
        case 12:
            return <WiShowers />;
        case 13:
        case 14:
            return <WiDayShowers />;
        case 15:
            return <WiThunderstorm />;
        case 16:
        case 17:
            return <WiDayThunderstorm />;
        case 18:
            return <WiDayRain />;
        case 19:
        case 23:
            return <WiDaySnow />;
        case 20:
        case 21:
            return <WiDaySnowWind />;
        case 22:
            return <WiSnow />;
        case 24:
            return <WiDust />;
        case 25:
        case 26:
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
        case 35:
        case 36:
            return <WiNightCloudyHigh />;
        case 37:
            return <WiNightFog />;
        case 38:
            return <WiNightAltCloudy />;
        case 39:
        case 40:
            return <WiNightShowers />;
        case 41:
        case 42:
            return <WiNightThunderstorm />;
        case 43:
        case 44:
            return <WiNightSnowWind />;
        default:
            return <WiNa />;
    }
}

export default IconDisplay;