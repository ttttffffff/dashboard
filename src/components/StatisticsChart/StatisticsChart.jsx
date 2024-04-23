import React, { useState, useMemo } from 'react'
import ReactEchart from 'echarts-for-react'
import * as echarts from 'echarts'
import { Category } from '@mui/icons-material'
import { getWeather } from '../../api/weather'
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindy, TiWeatherWindyCloudy } from "react-icons/ti";

export default function StatisticsChart() {
    const [xdata, setXdata] = useState(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
    const [ymax, setYmax] = useState([28000, 19000, 32000, 18000, 41000, 30000, 26000])
    const [ymin, setYmin] = useState([])
    const [weather_7,setWeather_7]=useState([])
    const option = {
        color: ['var(--orange)', '#4169E1'],//设置线条上坐标点的颜色
        //设置能够下载图表的功能和图标
        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },
        // 设置鼠标移动时的数据显示
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
            },
            backgroundColor: "rgba(0,0,0,0.59)",
            borderWidth: 0,
        },
        //设置tooltip位置
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: xdata
            }

        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                type: 'line',
                smooth: true,
                //设置线条样式
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(255,191,0)"
                        },
                        {
                            offset: 1,
                            color: '#f450d3'
                        }
                    ]),
                    width: 4,
                },
                //设置区域样式
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        {
                            offset: 0,
                            color: '#fe4c00'
                        },
                        {
                            offset: 1,
                            color: "rgba(255,144,70,0.1)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                // showSymbol: true,
                    // return 'image://../../../public/assets/partlysunny.svg'
                // symbol: chooseIcon(data),
                        
                // symbolSize: 30,
                // symbolOffset: ['50%', '-100%'],  // 图标的偏移量，使其显示在数据点上方
                // itemStyle: {
                //     color: 'white',
                // },
                showSymbol: false,
                data: ymax
            },
            {
                type: 'line',
                smooth: true,
                //设置线条样式
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#008B8B'
                        },
                        {
                            offset: 1,
                            color: "#9370DB"
                        }
                    ]),
                    width: 4,
                },
                //设置区域样式
                areaStyle: {
                    opacity: 0.5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        { offset: 0, color: 'rgb(0, 120, 255)' },  // 起始颜色为深蓝色
                        { offset: 1, color: 'rgba(70, 210, 243, 0.1)' }  // 结束颜色为浅蓝色
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: false,
                data: ymin
            }
        ]
    }
    const number2date = (num) => {
        const dateString = num.toString()
        const month = dateString.slice(4, 6)
        const day = dateString.slice(6, 8)
        const formatted = `${month}/${day}`
        return formatted
    }
    useMemo(() => {
        getWeather('114.13', '30.68').then(res => {
           
           
            const weather = []
           
            
            setXdata(res.data.daily.time)
            setYmax(res.data.daily.temperature_2m_max)
            setYmin(res.data.daily.temperature_2m_min)
        })
    }, [])
    return (
        <ReactEchart option={option}
        />
    )
}
