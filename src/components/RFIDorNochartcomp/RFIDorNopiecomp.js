import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import './RFIDorNopiecomp.css';

function RFIDorNopiecomp({ rfidorNodata }) {
    console.log(rfidorNodata,'rfidorNodatarfidorNodatarfidorNodatarfidorNodata')
    useEffect(() => {
        // 在这里使用 echarts 初始化图表
        const myChart = echarts.init(document.getElementById('RFIDorNopiechart'));

        // 配置和绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'item', // 触发类型，默认是'item'
                formatter: '{b}: {c} ({d}%)',
            },
            legend: {
                data: [
                    '非RFID',
                    'RFID',
                ],
                top: '5%',
                itemWidth: 10,
                itemHeight: 10,
                icon: 'circle',
            },
            series: [
                {
                    name: 'pieChart',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '50%'],
                    label: {
                        fontSize: 16,
                        formatter: '{b}: {c}', // {b} 表示 name，{c} 表示 value
                    },
                    labelLine: {
                        length: 30
                    },
                    data: [
                        {
                            value: 679,
                            name: '非RFID',
                            selected: true,
                            itemStyle: {
                                color: '#3b72f2',
                            },
                        },
                        {
                            value: 1775,
                            name: 'RFID',
                            itemStyle: {
                                color: '#f2870d',
                            },
                        },
                    ]
                },
            ]
        });

        // 在组件卸载时销毁图表
        return () => {
            myChart.dispose();
        };
    }, []); // 确保 useEffect 只运行一次，可以根据实际情况进行调整

    return (
        <div id="RFIDorNopiechart" className="chart-container">
            {/* 这里是图表容器，确保有一个唯一的 id */}
        </div>
    );
}

export default RFIDorNopiecomp;
