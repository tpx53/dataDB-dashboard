import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './PCSchartcomp.css';

function PCSchartcomp() {
  useEffect(() => {
    // 在这里使用 echarts 初始化图表
    const myChart = echarts.init(document.getElementById('PCSbarchart'));

    // 生成虚拟数据
    const generateRandomData = () => {
      return Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));
    };

    // 配置和绘制图表
    myChart.setOption({
      grid: {
          top: '40', // 上边距
          left: '30', // 左边距
          right: '30', // 右边距
          bottom: '20', // 下边距
          containLabel: true,
        },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      },
      yAxis: {
        type: 'value',
      },
      legend: {
        data: ['PCS数'],
        top: 0,
      },
      series: [
        {
          name: 'PCS数',
          type: 'bar',
          data: generateRandomData(), // 使用虚拟数据
          itemStyle: {
            // 渐变色
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#386ce4' },
              { offset: 1, color: '#afc3f3' },
            ]),
            barBorderRadius: 2,
          },
          label: {
            show: true,
            position: 'top', // 显示在柱条上方
            color: '#3a6de5', // 数值的颜色
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
    <div id="PCSbarchart" className="chart-container">
      {/* 这里是图表容器，确保有一个唯一的 id */}
    </div>
  );
}

export default PCSchartcomp;
