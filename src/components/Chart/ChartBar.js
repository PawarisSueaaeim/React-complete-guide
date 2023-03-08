import React from "react";

import './ChartBar.css';

const ChartBar = (props) => {

    let setFillHight = '0%';

    
    if (props.maxValue > 0 ) {
        console.log(props.maxValue, 'this is the maximum value');
        setFillHight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    console.log(setFillHight, 'this is setfillHight');

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div 
                    className="chart-bar__fill" 
                    style={{height: setFillHight}}>
                </div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar