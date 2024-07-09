import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './EveryPCSOrderlinebarchart.css';

function EveryPCSOrderlinebarchart() {

    const generateRandomData = (count) => {
        const data = [];
        for (let i = 0; i < count; i++) {
            data.push(Math.floor(Math.random() * 100) + 1); // 生成1到100之间的随机整数
        }
        return data;
    };

    useEffect(() => {
        // 在这里使用 echarts 初始化图表
        const myChart = echarts.init(document.getElementById('PCSOrderlinebarchart'));

        // 配置和绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'axis', // 提示框触发类型，可选为：'item' | 'axis'
            },
            grid: {
                top: '40px', // 上边距
                left: '30px', // 左边距
                right: '30px', // 右边距
                bottom: '20px', // 下边距
                containLabel: true,
            },
            legend: {
                data: ['PCS数（万张）', '订单数'],
                top: '5%',
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['test1', 'test2', 'test3', 'test 4', 'test 5', 'test 6', 'test 7', 'test 8', 'test 9', 'test 10'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'PCS数（万张）',
                },
                {
                    type: 'value',
                    name: '订单数',
                },
            ],
            series: [
                {
                    name: 'PCS数（万张）',
                    type: 'bar',
                    data: generateRandomData(10),
                    itemStyle: {
                        // 渐变色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#386ce4' },
                            { offset: 1, color: '#afc3f3' },
                        ]),
                        barBorderRadius: 2,
                    },
                },
                {
                    name: '订单数',
                    type: 'line',
                    yAxisIndex: 1, // 指定使用右侧的 y 轴
                    data: generateRandomData(10),
                    symbol: 'circle', // 折线上的标记点
                    lineStyle: {
                        color: '#ff6600', // 折线的颜色
                    },
                    itemStyle: {
                        color: '#ff6600', // 折线上的标记点颜色
                    },
                },
            ],
        });


        // 在组件卸载时销毁图表
        return () => {
            myChart.dispose();
        };
    }, []); // 确保 useEffect 只运行一次，可以根据实际情况进行调整

    return (
        <div id="PCSOrderlinebarchart" className="chart-container">
            {/* 这里是图表容器，确保有一个唯一的 id */}
        </div>
    );
}

export default EveryPCSOrderlinebarchart;
