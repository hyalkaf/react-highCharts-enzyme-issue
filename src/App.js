import React, { Component } from 'react';
global.HighCharts = require('highcharts');
require('highcharts/modules/exporting')(global.HighCharts);
require('highcharts-offline-exporting')(global.HighCharts);
const ReactHighCharts = require('react-highcharts');

const config = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
      text: 'Browser market shares January, 2015 to May, 2015'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Microsoft Internet Explorer',
        y: 56.33
    }, {
        name: 'Chrome',
        y: 24.03,
        sliced: true,
        selected: true
    }, {
        name: 'Firefox',
        y: 10.38
    }, {
        name: 'Safari',
        y: 4.77
    }, {
        name: 'Opera',
        y: 0.91
    }, {
        name: 'Proprietary or Undetectable',
        y: 0.2
    }]
  }]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ReactHighCharts config={config} />
        </div>
      </div>
    );
  }
}

export default App;
