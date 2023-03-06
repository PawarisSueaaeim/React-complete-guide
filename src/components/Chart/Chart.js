import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const chart = (props) => {

    return (
        <div className="chart">
            
            {props.dataPoint.map((items) => {
                <ChartBar 
                    key={items.id}
                    value={items.value}
                    maxValue={null}
                    label={items.label}
                />
            })}
        </div>
    );
};


export default chart