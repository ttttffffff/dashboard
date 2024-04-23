import axios from "axios";

export const weatherURL="https://api.open-meteo.com/v1/forecast"
//获取所有看板事件
export function getWeather(lon,lat){
    return axios.get(weatherURL,{params:
        {
            latitude:lat,
            longitude:lon,
            daily:'temperature_2m_max,temperature_2m_min',
            past_days:'1',
            forecast_days:'14'
        }})
}
export function getHumidity(lon,lat){
    return axios.get(weatherURL,
        {params:{latitude:lat,longitude:lon,
            current:'weather_code,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m',
            forecast_days:'1',
            daily:'sunset'
        }})
}