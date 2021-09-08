import React from 'react'

import { CapsuleChart } from '@jiaminghi/data-view-react'

import './VisualRanking.css'

const configdata = {
  data: [
    {
      name: '联想小新',
      value: 55,
    },
    {
      name: '苹果手机',
      value: 120,
    },
    {
      name: '小米电视',
      value: 78,
    },
    {
      name: '华为手表',
      value: 66,
    },
    {
      name: '女士香水',
      value: 80,
    },
    {
      name: '食品',
      value: 45,
    },
    {
      name: '酒水',
      value: 29,
    },
    {
      name: '服装',
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
            <div className="ranking-board-title">商品销量量显示</div>
            <CapsuleChart config={temp} />
          </div>
        );
    }
}

export default VisualRanking;
