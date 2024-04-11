import React from 'react'
import ReactEchart from 'echarts-for-react'
import * as echarts from 'echarts'
import { Category } from '@mui/icons-material'
export default function StatisticsChart() {
    const option = {
        color:['var(--orange)'],//设置线条上坐标点的颜色
        //设置能够下载图表的功能和图标
        toolbox:{
            feature:{
                saveAsImage:{},
            }
        },
        // 设置鼠标移动时的数据显示
        tooltip:{
            trigger:"axis",
            axisPointer:{
                type:"cross",
            },
            backgroundColor:"rgba(0,0,0,0.59)",
            borderWidth:0,
        },
        //设置tooltip位置
        grid:{
            left:"3%",
            right:"4%",
            bottom:"3%",
            containLabel:true,
            show:false,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            }

        ],
        yAxis:[
            {
                type:"value",
                splitLine:{
                    show:false
                }
            }
        ],
        series:[
            {
                type:'line',
                smooth:true,
                //设置线条样式
                lineStyle:{
                    color:new echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset:0,
                            color:"rgb(255,191,0)"
                        },
                        {
                            offset:1,
                            color:'#f450d3'
                        }
                    ]),
                    width:4,
                },
                //设置区域样式
                areaStyle:{
                    opacity:.5,
                    color:new echarts.graphic.LinearGradient(0,0,0,0.8, [
                        {offset:0,
                        color:'#fe4c00'},
                        {
                            offset:1,
                            color:"rgba(255,144,70,0.1)"
                        }
                    ])
                },
                emphasis:{
                    focus:"series",
                },
                showSymbol:false,
                data:[28000,19000,32000,18000,41000,30000,26000]
            }
        ]
    }
    return (
        <ReactEchart option={option}
        />
    )
}
