import React from 'react';
import './popup.css'; // Make sure to import the CSS file

const Popup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &#215; {/* Close (cross) icon */}
        </button>
        {/* <p>This is the popup content.</p> */}
<div className='maindiv'>
    <div>
        <h3>INVESTMENTS</h3>
        <h2>Mutual Fund</h2>
        <h2>Indian Equity</h2>
        <h2>Digital Gold</h2>
        <h2>Fixed Deposits</h2>
    </div>
    <div> 
        <h3>DATA</h3>
        <h2>Market Reasearch</h2>
        <h2>Historical Resource</h2>
    </div>
</div>
        
      </div>
      
    </div>
  );
};

export default Popup;
