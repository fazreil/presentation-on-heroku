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
					{ label: "Build", y: parseInt(this.props.build,10)},
					{ label: "Deployment", y: parseInt(this.props.deployment,10)},
					{ label: "Patch Management", y: parseInt(this.props.patchManagement,10)},
					{ label: "Education and Guidance", y: parseInt(this.props.educationAndGuidance,10)},
					{ label: "Culture and Organization", y: parseInt(this.props.cultureAndOrganization,10)},
					{ label: "Process", y: parseInt(this.props.process,10)},
					{ label: "Monitoring", y: parseInt(this.props.monitoring,10)},
					{ label: "Logging", y: parseInt(this.props.logging,10)},
					{ label: "Infrastructure Hardening", y: parseInt(this.props.infrastructureHardening,10)},
					{ label: "Dynamic Depth for application", y: parseInt(this.props.dynamicDepthForApplication,10)},
					{ label: "Static depth for applications", y: parseInt(this.props.staticDepthForApplication,10)},
					{ label: "Consolidatioin", y: parseInt(this.props.consolidation,10)},
					{ label: "Application Tests", y: parseInt(this.props.applicationTests,10)},
					{ label: "Dynamic Depth for infrastructure", y: parseInt(this.props.dynamicDepthForInfrastructure,10)},
					{ label: "Static Depth for infrastructure", y: parseInt(this.props.staticDepthForInfrastructure,10)}
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

export default MaturityChart;
