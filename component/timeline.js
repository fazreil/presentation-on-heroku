import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	title: {
		text: "Employees Salary in a Company"
	},
	axisX: {
		title: "Departments"
	},
	axisY: {
		title: "Salary in USD",
		interval: 10,
		suffix: "k",
		prefix: "$"
	},
	data: [{
		type: "rangeBar",
		showInLegend: true,
		yValueFormatString: "$#0.#K",
		indexLabel: "{y[#index]}",
		legendText: "Department wise Min and Max Salary",
		toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
		dataPoints: [
			{ x: 10, y:[80, 115], label: "Data Scientist" },
			{ x: 20, y:[95, 141], label: "Product Manager" },
			{ x: 30, y:[98, 115], label: "Web Developer" },
			{ x: 40, y:[90, 160], label: "Software Engineer" },
			{ x: 50, y:[100,152], label: "Quality Assurance" }
		]
	}]
});
chart.render();

}
