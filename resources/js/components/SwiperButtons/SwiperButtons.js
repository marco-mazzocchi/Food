import React from 'react';

import './SwiperButtons.css';

function SwiperButtons(props) {
    return (
        <div className="buttons">
          <div className="water-btn btn" onClick={ props.onWaterClick }>
            <i className="fas fa-tint"></i>
          </div>
          <div className="check-btn btn" onClick={ props.onCheckClick }>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="fire-btn btn" onClick={ props.onFireClick }>
            <i className="fas fa-fire"></i>
          </div>
        </div>
    );
}

export default SwiperButtons;
