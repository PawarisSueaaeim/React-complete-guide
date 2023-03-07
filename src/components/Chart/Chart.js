import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const chart = (props) => {
    const dataPointMaxValues = props.dataPoint.map((items) => (items.values));
    const totalMaxValues = Math.max(dataPointMaxValues);

    return (
        <div className="chart">
            {props.dataPoint.map((items) => {
                <ChartBar 
                    key={items.id}
                    value={items.value}
                    maxValue={totalMaxValues}
                    label={items.label}
                />
            })}
        </div>
    );
};


export default chart