import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const y1 = this.props.y;
    var y2 = parseInt(y1,10);
    const options = {
			theme: "dark2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Number of iPhones Sold",
			},
			axisY: {
				title: "Number of iPhones ( in Million )",
				includeZero: false,
			},
			data: [
			{
				type: "area",
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0.## Million",
				dataPoints: [
					{ x: new Date(2017, 0), y: y1},
					{ x: new Date(2016, 0), y: y2},
					{ x: new Date(2015, 0), y: 6.4},
					{ x: new Date(2014, 0), y: 5.3},
					{ x: new Date(2013, 0), y: 4.5},
					{ x: new Date(2012, 0), y: 3.8},
					{ x: new Date(2011, 0), y: 3.2}
				]
			}
			]
		}

    return (
      <div style={{position: 'relative', left: '-20%', bgcolor: 'yellow'}}>
        <h1>{this.props.y}</h1>
        <h1>{y1}</h1>
        <CanvasJSChart options = {options}/>
        <h1></h1>
      </div>
    );
  }
}

export default Chart;
