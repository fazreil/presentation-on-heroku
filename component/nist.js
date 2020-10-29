import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class NIST extends Component {
  render() {
    const options = {
			theme: "light1",
			animationEnabled: true,
      margin: -100,
			exportEnabled: true,
      backgroundColor: "#fd0",
      width: 1020,
      height: 500,
			title: {
				text: ""+this.props.title,
        wrap: true,
        maxWidth: 300,
        dockInsidePlotArea: true,
        verticalAlign: "center",
        horizontalAlign: "center"
			},
			data: [
			{
				type: "doughnut",
        startAngle: -125,
        //innerRadius: 60,
		    indexLabelFontSize: 17,
		    indexLabel: "{label}",
		    toolTipContent: "<b>Step {label} - {desc}</b>",
				dataPoints: [
					{ label: "1. Identify", y: 20, desc: "Develop an organizational understanding to manage cybersecurity risk to systems, people, assets, data and capabilities"},
					{ label: "2. Protect", y: 20, desc: "Develop and implement appropriate safeguards to ensure delivery of critical services"},
					{ label: "3. Detect", y: 20, desc: "Develop and implement appropriate activities to identify the occurence of cybersecurity event"},
					{ label: "4. Respond", y: 20, desc: "Develop and implement appropriate activities to take action regarding a detected cybersecurity incidents"},
					{ label: "5. Recover", y: 20, desc: "Develop and implement appropriate activities to maintain plans for resilience and to restore any capabilities or services that were impaired due to a cybersecurity incident."}
				]
			}
			]
		}

    return (
      <div style={{position: 'relative', left: '-30%',}}>
        <CanvasJSChart options = {options}/>
      </div>
    );
  }
}

export default NIST;
