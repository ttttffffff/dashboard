import React, { useMemo, useState } from 'react'
import css from './Statistics.module.css'
import { BsArrowUpShort,BsCloudDrizzleFill } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindy, TiWeatherWindyCloudy } from "react-icons/ti";
import { IoIosPartlySunny } from "react-icons/io";
import { getHumidity } from '../../api/weather'

const LONGITUDE='114.13'
const LATITUDE='30.68'


export default function Statistics() {
  const [weather, setWeather] = useState('sunny')
  const [humid,setHumid]=useState('%')
  const [wind,setWind]=useState('')
  const [sunset,setSunset]=useState('')
  const chooseIcon = (weather) => {
    switch (weather) {
      case 'cloudy':
        return <TiWeatherCloudy />
      case 'pcloudy':
        return <IoIosPartlySunny/>
      case 'rain':
        icon = <TiWeatherDownpour />;
        break;
      case 'snow':
        icon = <TiWeatherSnow />;
        break;
      case 'stormy':
        icon = <TiWeatherStormy />;
        break;
      case 'clear':
        icon = <TiWeatherSunny />;
        break;
      case 'windy':
        icon = <TiWeatherWindy />;
        break;
      case 'lightrain':
        return <BsCloudDrizzleFill />;
      default:
        return <BsCloudDrizzleFill/>
    }
  }
  const formattime=(time)=>{
    const utcTime = new Date(time);
    const chinaTime = new Date(utcTime.getTime() + 8 * 60 * 60 * 1000);

    const hours = chinaTime.getHours().toString().padStart(2, '0');
    const minutes = chinaTime.getMinutes().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    return timeString;
  }
  useMemo(()=>{
    getHumidity(LONGITUDE,LATITUDE).then(res=>{
      setHumid((res.data.current.relative_humidity_2m).toString()+' %')
      setWind(res.data.current.wind_speed_10m.toString()+" Km/h")
      setSunset(formattime(res.data.daily.sunset[0]))
    })
  },[])

  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview Statistic</span>
      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            {chooseIcon(weather)}
            {/* <BsArrowUpShort /> */}
          </div>
          <div className={css.card}>
            <span>Weather today</span><span>{weather}</span>
          </div>
        </div>

        <div className={css.card}>
          <span>Humidity</span><span>{humid}</span>
        </div>
        <div className={css.card}>
          <span>Wind</span><span>{wind}</span>
        </div>
        <div className={css.card}>
          <span>Sunset</span><span>{sunset}</span>
        </div>
      </div>
      <StatisticsChart onchangeWeather={setWeather} />
    </div>
  )
}
