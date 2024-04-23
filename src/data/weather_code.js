export function wmoToWeather(wmoCode) {
    const weatherDict = {
        '0': 'No Precipitation',
        '1': 'Clouds Dissolving',
        '2': 'Unchanged Sky',
        '3': 'Clouds Forming',
        '4': 'Smoke',
        '5': 'Haze',
        '6': 'Dust in the Air',
        '7': 'Dust or Sand Raised by Wind',
        '8': 'Dust Whirls or Sand Whirls',
        '9': 'Duststorm or Sandstorm',
        '10': 'Mist',
        '11': 'Patches of Fog or Ice Fog',
        '12': 'Continuous Fog or Ice Fog',
        '13': 'Visible Lightning',
        '14': 'Precipitation Not Reaching Ground',
        '15': 'Distant Precipitation',
        '16': 'Precipitation Near Station',
        '17': 'Thunderstorm',
        '18': 'Squalls',
        '19': 'Funnel Cloud',
        '20': 'Drizzle (Not Freezing)',
        '21': 'Rain (Not Freezing)',
        '22': 'Snow',
        '23': 'Rain and Snow or Ice Pellets',
        '24': 'Freezing Drizzle or Freezing Rain',
        '25': 'Shower(s) of Rain',
        '26': 'Shower(s) of Snow or Rain and Snow',
        '27': 'Shower(s) of Hail',
        '28': 'Fog or Ice Fog',
        '29': 'Thunderstorm',
        '30': 'Duststorm or Sandstorm (Slight to Moderate)',
        '31': 'Duststorm or Sandstorm (No Change)',
        '32': 'Duststorm or Sandstorm (Begun or Increased)',
        '33': 'Severe Duststorm or Sandstorm (Decreased)',
        '34': 'Severe Duststorm or Sandstorm (No Change)',
        '35': 'Severe Duststorm or Sandstorm (Begun or Increased)',
        '36': 'Blowing Snow (Slight to Moderate)',
        '37': 'Heavy Drifting Snow',
        '38': 'Blowing Snow (High)',
        '39': 'Heavy Drifting Snow',
        '40': 'Fog or Ice Fog (At a Distance)',
        '41': 'Fog or Ice Fog (Patches)',
        '42': 'Fog or Ice Fog (Thinning)',
        '43': 'Fog or Ice Fog (Sky Invisible)',
        '44': 'Fog or Ice Fog (No Change)',
        '45': 'Fog or Ice Fog (Sky Invisible)',
        '46': 'Fog or Ice Fog (Thickening)',
        '47': 'Fog or Ice Fog (Sky Invisible)',
        '48': 'Fog Depositing Rime',
        '49': 'Fog Depositing Rime (Sky Invisible)',
        '50': 'Drizzle (Intermittent Slight)',
        '51': 'Drizzle (Continuous)',
        '52': 'Drizzle (Intermittent Moderate)',
        '53': 'Drizzle (Continuous)',
        '54': 'Drizzle (Intermittent Heavy)',
        '55': 'Drizzle (Continuous)',
        '56': 'Freezing Drizzle (Slight)',
        '57': 'Freezing Drizzle (Moderate or Heavy)',
        '58': 'Drizzle and Rain (Slight)',
        '59': 'Drizzle and Rain (Moderate or Heavy)',
        '60': 'Rain (Intermittent Slight)',
        '61': 'Rain (Continuous)',
        '62': 'Rain (Intermittent Moderate)',
        '63': 'Rain (Continuous)',
        '64': 'Rain (Intermittent Heavy)',
        '65': 'Rain (Continuous)',
        '66': 'Freezing Rain (Slight)',
        '67': 'Freezing Rain (Moderate or Heavy)',
        '68': 'Rain or Drizzle and Snow (Slight)',
        '69': 'Rain or Drizzle and Snow (Moderate or Heavy)',
        '70': 'Intermittent Snowfall (Slight)',
        '71': 'Continuous Snowfall',
        '72': 'Intermittent Snowfall (Moderate)',
        '73': 'Continuous Snowfall',
        '74': 'Intermittent Snowfall (Heavy)',
        '75': 'Continuous Snowfall',
        '76': 'Diamond Dust',
        '77': 'Snow Grains',
        '78': 'Isolated Star-Like Snow Crystals',
        '79': 'Ice Pellets',
        '80': 'Rain shower(s), slight',
        '81': 'Rain shower(s), moderate or heavy',
        '82': 'Rain shower(s), violent',
        '83': 'Shower(s) of rain and snow mixed, slight',
        '84': 'Shower(s) of rain and snow mixed, moderate or heavy',
        '85': 'Snow shower(s), slight',
        '86': 'Snow shower(s), moderate or heavy',
        '87': 'Shower(s) of snow pellets or small hail - slight',
        '88': 'Shower(s) of snow pellets or small hail - moderate or heavy',
        '89': 'Shower(s) of hail - slight',
        '90': 'Shower(s) of hail - moderate or heavy',
        '91': 'Slight rain, thunderstorm preceding hour',
        '92': 'Moderate or heavy rain',
        '93': 'Slight snow, rain and snow mixed or hail',
        '94': 'Moderate or heavy snow, rain and snow mixed or hail',
        '95': 'Thunderstorm, slight or moderate without hail',
        '96': 'Thunderstorm, slight or moderate with hail',
        '97': 'Thunderstorm, heavy without hail',
        '98': 'Thunderstorm combined with duststorm or sandstorm',
        '99': 'Thunderstorm, heavy with hail'
    }
    return weatherDict[wmoCode] || 'Unknown Weather';
}
export function wmoToWeather_zh(wmoCode){
    weather_dict = {
        '0': '晴朗',
        '1': '多云',
        '2': '阴天',
        '3': '局部多云',
        '4': '局部多云',
        '5': '局部多云',
        '10': '有雾',
        '11': '有浓雾',
        '12': '有大雾',
        '18': '有霭',
        '20': '有雷暴',
        '21': '有雷暴并伴有雨',
        '22': '有霹雳',
        '23': '有雷暴并伴有冰雹',
        '24': '有雷暴并伴有雨和雪',
        '29': '有雷暴并伴有冰雹',
        '30': '有薄雾',
        '31': '有浓雾',
        '32': '有雾',
        '33': '有浓烟',
        '34': '有轻度浓烟',
        '35': '有中度浓烟',
        '40': '有小雨',
        '41': '有中雨',
        '42': '有大雨',
        '43': '有暴雨',
        '44': '有阵雨',
        '45': '有阵雨',
        '46': '有阵雨',
        '47': '有阵雨',
        '48': '有小雪',
        '49': '有中雪',
        '50': '有大雪',
        '51': '有暴雪',
        '52': '有雨夹雪',
        '53': '有雨夹雪',
        '54': '有雨夹雪',
        '55': '有雨夹雪',
        '56': '有雨夹雪',
        '57': '有雨夹雪',
        '58': '有雨夹雪',
        '60': '有小雨和雪',
        '61': '有中雨和雪',
        '62': '有大雨和雪',
        '63': '有暴雨和雪',
        '64': '有小阵雨和雪',
        '65': '有中阵雨和雪',
        '66': '有大阵雨和雪',
        '67': '有暴阵雨和雪',
        '68': '有小阵雪',
        '69': '有中阵雪',
        '70': '有大阵雪',
        '71': '有暴阵雪',
        '72': '有雨',
        '73': '有冰雹',
        '74': '有雪',
        '75': '有雨和雪',
        '79': '有冰雹',
        '80': '有雨',
        '81': '有阵雨',
        '82': '有阵雨',
        '83': '有阵雨',
        '84': '有阵雨',
        '85': '有阵雨',
        '86': '有阵雨',
        '87': '有阵雨',
        '89': '有阵雪',
        '90': '有雾',
        '91': '有浓雾',
        '92': '有雾',
        '93': '有浓烟',
        '94': '有浓烟',
        '95': '有雾霾',
        '96': '有浓雾霾',
        '97': '有沙尘暴',
        '98': '有扬沙',
        '99': '有浓尘暴'
    }
    return weather_dict[wmoCode]|| 'Unknown Weather'

}
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindy, TiWeatherWindyCloudy } from "react-icons/ti";
import { IoIosPartlySunny } from "react-icons/io";
import { BsArrowUpShort,BsCloudDrizzleFill,BsCloudFogFill } from 'react-icons/bs'
export function getWeatherCategory(weatherName) {
    //这个方式最为科学，日后补充
    // const weatherCategories = {
    //     'Clear': ['Sunny','Partly Cloudy'],
    //     'Cloudy': ['Cloudy' ],
    //     'Showers':['Showers','Light Showers','Moderate Showers','Heavy Showers','Torrential Showers'],
    //     'Rain':['Rain', 'Light Rain', 'Moderate Rain', 'Heavy Rain', 'Torrential Rain'],
    //     'Thunderstorm': ['Thunderstorm', 'Thunderstorm with Rain', 'Thunderstorm with Lightning', 'Thunderstorm with Hail','Thunderstorm with Rain and Snow'],
    //     'Snow': ['Light Snow', 'Moderate Snow', 'Heavy Snow', 'Snow Showers', 'Light Rain and Snow', 'Moderate Rain and Snow', 'Heavy Rain and Snow', 'Torrential Rain and Snow', 'Light Showers and Snow', 'Moderate Showers and Snow', 'Heavy Showers and Snow', 'Torrential Showers and Snow', 'Sleet'],
    //     'Mist': ['Mist', 'Light Mist'],
    //     'Fog': ['Fog', 'Dense Fog', 'Dense Smoke', 'Light Smoke','Moderate Smoke', 'Fog and Haze', 'Dense Fog and Haze'],
    //     'Haze': ['Haze'],
    //     'Blizzard': ['Blizzard'],
    //     'Hail': ['Hail'],
    //     'Dust Storm': ['Dust Storm', 'Sandstorm']
    //     // 添加其他天气名称和相应的大类
    // };
    // 遍历天气分类字典，检查给定的天气名称属于哪个大类
    // for (const category in weatherCategories) {
    //     if (weatherCategories[category].includes(weatherName)) {
    //         return category;
    //     }
    // }

    // return 'Unknown Category'; // 如果无法确定天气名称所属的大类，则返回一个未知的大类
    console.log('111',weatherName)
    if(weatherName.includes('Rain')){
        return TiWeatherDownpour
    }else if(weatherName.includes('Clouds')){
        return TiWeatherCloudy
    }    else if(weatherName.includes('Thunderstorm')){
        return  TiWeatherStormy
    }
    else if(weatherName.includes('Snow')){
        return TiWeatherSnow
    }
    else if(weatherName.includes('Showers')){
        return BsCloudDrizzleFill
    }
    else if(weatherName.includes('Drizzle')){
        return BsCloudDrizzleFill
    }
    else if(weatherName.includes('Fog')){
        return BsCloudFogFill
    }
    else{
        return TiWeatherSunny
    }

    
}