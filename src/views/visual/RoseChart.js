import React, { useState, useEffect } from 'react'

import { Charts } from '@jiaminghi/data-view-react'

import './RoseChart.css'

function getData() {
  return {
    series: [
      {
        type: 'pie',
        radius: '50%',
        roseSort: false,
        data: [
          { name: '苹果', value: randomExtend(40, 70) },
          { name: '联想', value: randomExtend(10, 50) },
          { name: '三只松鼠', value: randomExtend(5, 20) },
          { name: '华为', value: randomExtend(40, 50) },
          { name: '蒙牛', value: randomExtend(20, 30) },
          { name: '小米', value: randomExtend(20, 30) },
          { name: '松下', value: randomExtend(5, 10) },
        ],
        insideLabel: {
          show: false,
        },
        outsideLabel: {
          formatter: '{name} {percent}%',
          labelLineEndLength: 15,
          style: {
            fill: '#fff',
          },
          labelLineStyle: {
            stroke: '#fff',
          },
        },
        roseType: true,
      },
    ],
    color: [
      '#da2f00',
      '#fa3600',
      '#ff4411',
      '#ff724c',
      '#541200',
      '#801b00',
      '#a02200',
      '#5d1400',
      '#b72700',
    ],
  }
}

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

class RoseChart extends React.Component {
    constructor(props) {
        super(props);
        let res = getData();
        this.state = {
            option: res
        };
    }
    
    // componentDidMount() {
    //     this.setState({
    //         option: getData()
    //     });
    // }

    render() {
        let temp = getData();
        return (
          <div id="rose-chart">
            <div className="rose-chart-title">累计销量资金分布</div>
            <Charts style={{height: "400px"}} option={temp} />
          </div>
        )
    }
  
}

export default RoseChart;