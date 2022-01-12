import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = (props) => {
    const datPointsValues= props.dataPoints.map(dataPoint=> dataPoint.value)
    const totalMaximun= Math.max(...datPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
