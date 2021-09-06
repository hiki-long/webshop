import React from 'react'

import { CapsuleChart } from '@jiaminghi/data-view-react'

import './VisualRanking.css'

const configdata = {
  data: [
    {
      name: '日常养护',
      value: 55,
    },
    {
      name: '交通事故',
      value: 120,
    },
    {
      name: '路面',
      value: 78,
    },
    {
      name: '桥通',
      value: 66,
    },
    {
      name: '计日工',
      value: 80,
    },
    {
      name: '路基',
      value: 45,
    },
    {
      name: '交安设施',
      value: 29,
    },
    {
      name: '除雪',
      value: 29,
    },
    {
      name: '绿化',
      value: 29,
    },
  ],
  showValue: true
}

class VisualRanking extends React.Component{
    render() {
        let temp = configdata;
        return (
          <div id="ranking-board">
            <div className="ranking-board-title">巡查上报记录数量</div>
            <CapsuleChart config={temp} />
            {/* <div className="ranking-board-title">巡查上报记录数量</div>
            <CapsuleChart config={temp} />
            <div className="ranking-board-title">巡查上报记录数量</div>
            <CapsuleChart config={temp} /> */}
          </div>
        );
    }
}

export default VisualRanking;
