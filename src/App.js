// import logo from './logo.svg';
import ECIyearOrderQty from './components/ECIyearOrderQty/ECIyearOrderQty';
import ECIyearPCS from './components/ECIyearPCS/ECIyearPCS';
import PCSchartcomp from './components/PCSchartcomp/PCSchartcomp';
import OrderCoverchart from './components/OrderCoverchartcomp/OrderCoverchart';
import RFIDorNopiecomp from './components/RFIDorNochartcomp/RFIDorNopiecomp';
import EveryPCSOrderlinebarchart from './components/EveryPCSOrderline/EveryPCSOrderlinebarchart';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pcsCount, setpcsCount] = useState(null);
  const [orderCount, setorderCount] = useState(null);
  const [rfidorNodata, setrfidorNodata] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.24.160:4000/api/datafilecsv')
      .then(
        response => {
          console.log(response.data);
          setpcsCount(response.data.pcsCount);
          setorderCount(response.data.orderCount);
          setrfidorNodata(response.data.rfidorNodata)
        })
      .catch(error => {
        console.error('Error:', error);
      })
  }, [])


  return (
    <div className="App">
      <div className="title_dashboard">
        <div className="title_dashboard_box">
          <div className='title_left_box'>
            <div className='leftbox1'>站点订单及生产数据统计看板</div>
            <div className='leftbox2'></div>
            <div className='leftbox3'>Dashboard</div>
          </div>
          <div className='title_right_box'>最新更新时间：2024/2/19</div>
        </div>
      </div>
      <div className="body_dashboard">
        <div className='body_dashboard_floor1'>
          <div className='floor1_box1'>
            <div className='floor1_box1_top'>
              <ECIyearOrderQty pcsCount={pcsCount} />
            </div>
            <div className='floor1_box1_down'>
              <ECIyearPCS orderCount={orderCount} />
            </div>
          </div>
          <div className='floor1_box2'>
            <div className='component_title'>2023年1-12月PCS数分布（单位：件）</div>
            <PCSchartcomp />
          </div>
          <div className='floor1_box3'>
            <div className='component_title'>2023年1-12月订单数量分布（单位：张）</div>
            <OrderCoverchart />
          </div>
        </div>
        <div className='body_dashboard_floor2'>
          <div className='floor2_box1'>
            <div className='component_title'>RFID & 非RFID产品数量占比情况</div>
            <RFIDorNopiecomp rfidorNodata={rfidorNodata} />
          </div>
          <div className='floor2_box2'>
            <div className='component_title'>2023年各外站 PCS数 & 订单份数分布</div>
            <EveryPCSOrderlinebarchart />
          </div>
          <div className='floor2_box3'>

          </div>
        </div>
        <div className='body_dashboard_floor3'>
          <div className='floor3_box1'>
            <PCSchartcomp />
          </div>
          <div className='floor3_box2'>
            <PCSchartcomp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
