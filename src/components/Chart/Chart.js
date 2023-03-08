import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointMaxValues = props.dataPoint.map(items => items.value);
    const totalMaxValues = Math.max(...dataPointMaxValues);
    return (
        <div className="chart">
            {props.dataPoint.map((items) => {
                return (
                <ChartBar 
                    key={items.id}
                    value={items.value}
                    maxValue={totalMaxValues}
                    label={items.label}
                />
                )
            })}
        </div>
    );
};


export default Chart