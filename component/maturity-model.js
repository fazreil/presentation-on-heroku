import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MaturityChart extends Component {
  render() {
    const y1 = this.props.y;
    var y2 = parseInt(y1,10);
    const options = {
			theme: "light1",
			animationEnabled: true,
      margin: -100,
			exportEnabled: true,
      width: 1020,
      height: 500,
			title: {
				text: "Devops Maturity Level in "+this.props.org,
			},
			axisY: {
				title: "Maturity Level",
				includeZero: false,
			},
			data: [
			{
				type: "column",
				dataPoints: [
					{ label: "Build", y: 2},
					{ label: "Deployment", y: 3},
					{ label: "Patch Management", y: 2},
					{ label: "Education and Guidance", y: 1},
					{ label: "Culture and Organization", y: 1},
					{ label: "Process", y: 3},
					{ label: "Monitoring", y: 3},
					{ label: "Logging", y: 1},
					{ label: "Infrastructure Hardening", y: 2},
					{ label: "Dynamic Depth for application", y: 2},
					{ label: "Static depth for applications", y: 4},
					{ label: "Consolidatioin", y: 4},
					{ label: "Application Tests", y: 2},
					{ label: "Dynamic Depth for infrastructure", y: 1},
					{ label: "Static Depth for infrastructure", y: 1}
				]
			}
			]
		}

    return (
      <div style={{position: 'relative', left: '-50%',}}>
        <CanvasJSChart options = {options}/>
      </div>
    );
  }
}

export default MaturityChart;
