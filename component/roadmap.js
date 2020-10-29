import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MaturityChart extends Component {
  render() {
    const options = {
			theme: "light1",
			animationEnabled: true,
      margin: -100,
			exportEnabled: true,
      width: 1020,
      height: 500,
			title: {
				text: "Timeline Devops Maturity Level ",
			},
			axisY: {
				title: "Month",
				includeZero: false,
			},
			data: [
			{
				type: "column",
				dataPoints: [
					{ label: "Education and Guidance", y: 0.5},
					{ label: "Culture and Organization", y: 1},
					{ label: "Process", y: 2},
					{ label: "Build", y: 2},
					{ label: "Deployment", y: 1},
					{ label: "Patch Management", y: 1},
					{ label: "Logging", y: 0.5},
					{ label: "Infrastructure", y: 2},
					{ label: "Monitoring", y: 2},
					{ label: "Dynamic Depth for application", y: 1},
					{ label: "Static depth for applications", y: 1},
					{ label: "Consolidatioin", y: 1},
					{ label: "Application Tests", y: 1},
					{ label: "Dynamic Depth for infrastructure", y: 1},
					{ label: "Static Depth for infrastructure", y: 1}
				]
			}
			]
		}

    return (
      <div style={{position: 'relative', left: '-30%'}}>
        <CanvasJSChart options = {options}/>
      </div>
    );
  }
}

export default MaturityChart;
