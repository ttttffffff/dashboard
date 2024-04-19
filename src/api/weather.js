import axios from "axios";

export const weatherURL="http://www.7timer.info/bin/api.pl"
//获取所有看板事件
export function getWeather(lon,lat){
    return axios.get(weatherURL,{params:{lon:lon,lat:lat,product:'civillight',output:'json'}})
}
export function getHumidity(lon,lat){
    return axios.get("https://api.open-meteo.com/v1/forecast?",
        {params:{latitude:lat,longitude:lon,
            current:'relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m',
            forecast_days:'1',
            daily:'sunset'
        }})
}