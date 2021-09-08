import React from 'react';
import { ScrollBoard } from '@jiaminghi/data-view-react'

import './ScrollRank.css'

const config = {
  header: ['时间', '用户id', '用户行为'],
  data: [
    ['2019-07-01 19:25:00', '16xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '25xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '69xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '24xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '55xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '36xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '98xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '75xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '34xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '61xxxxx','购买小米手机'],
    ['2019-07-01 19:25:00', '95xxxxx','购买小米手机'],
    ['2019-07-02 17:25:00', '35xxxxx','购买小米手机'],
    ['2019-07-03 16:25:00', '21xxxxx','购买小米手机'],
    ['2019-07-04 15:25:00', '64xxxxx','购买小米手机'],
    ['2019-07-05 14:25:00', '32xxxxx','购买小米手机'],
    ['2019-07-06 13:25:00', '12xxxxx','购买小米手机'],
    ['2019-07-07 12:25:00', '65xxxxx','购买小米手机'],
    ['2019-07-08 11:25:00', '24xxxxx','购买小米手机'],
    ['2019-07-09 10:25:00', '91xxxxx','购买小米手机'],
    ['2019-07-10 09:25:00', '25xxxxx','购买小米手机'],
  ],
  index: true,
  columnWidth: [60, 150, 150],
  align: ['center'],
  rowNum: 7,
  headerBGC: '#1981f6',
  headerHeight: 45,
  oddRowBGC: 'rgba(0, 44, 81, 0.8)',
  evenRowBGC: 'rgba(10, 29, 50, 0.8)',
};

class ScrollRank extends React.Component{
    render() {
        return(
            <div id="scroll-board">
                <ScrollBoard config={config} />
            </div>
        )
    }
};

export default ScrollRank;