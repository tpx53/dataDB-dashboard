import './ECIyearPCS.css'
import React, { useState, useEffect } from 'react';

function ECIyearPCS({ orderCount }) {
  const [formattedorderCount, setformattedorderCount] = useState();

  useEffect(() => {
    const arOrderCount = parseInt(orderCount, 10)
    const formattedCount = arOrderCount ? arOrderCount.toLocaleString() : '';
    setformattedorderCount(formattedCount);
  }, [orderCount])

  return (
    <div className='app_ECIyearPCS'>
      <div className='ECIyearPCS_title'>2023年1-12月订单数</div>
      <div className='ECIyearPCS_body'>
        <div className='ECIyearPCS_body_number'>{formattedorderCount || '...'}</div>
        <div className='ECIyearPCS_body_danwei'>单位：张</div>
      </div>
    </div>
  );
}

export default ECIyearPCS;
