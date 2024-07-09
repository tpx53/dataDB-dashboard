import './ECIyearOrderQty.css'
import React, { useState, useEffect } from 'react';

function ECIyearOrderQty({ pcsCount }) {
  const [formattedPcsCount, setFormattedPcsCount] = useState('');

  useEffect(() => {
    const arPcsCount = parseInt(pcsCount, 10);
    const formattedCount = arPcsCount ? arPcsCount.toLocaleString() : '';
    setFormattedPcsCount(formattedCount);
  }, [pcsCount]); // 在 pcsCount 改变时触发 useEffect

  return (
    <div className='app_ECIyearOrderQty'>
      <div className='ECIyearOrderQty_title'>2023年1-12月PCS数</div>
      <div className='ECIyearOrderQty_body'>
        <div className='ECIyearOrderQty_body_number'>{formattedPcsCount || '...'}</div>
        <div className='ECIyearOrderQty_body_danwei'>单位：万件</div>
      </div>
    </div>
  );
}

export default ECIyearOrderQty;
