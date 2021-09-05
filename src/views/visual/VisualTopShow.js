import React from 'react';
import './VisualTopShow.css';
import { DigitalFlop, Decoration10 } from '@jiaminghi/data-view-react'
function getData() {
    return [
        {
        title: '管养里程',
        number: {
            number: [randomExtend(20000, 30000)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#4d99fc',
            fontWeight: 'bold',
            },
        },
        unit: '公里',
        },
        {
        title: '桥梁',
        number: {
            number: [randomExtend(20, 30)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#f46827',
            fontWeight: 'bold',
            },
        },
        unit: '座',
        },
        {
        title: '涵洞隧道',
        number: {
            number: [randomExtend(20, 30)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#40faee',
            fontWeight: 'bold',
            },
        },
        unit: '个',
        },
        {
        title: '匝道',
        number: {
            number: [randomExtend(10, 20)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#4d99fc',
            fontWeight: 'bold',
            },
        },
        unit: '个',
        },
        {
        title: '隧道',
        number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#f46827',
            fontWeight: 'bold',
            },
        },
        unit: '个',
        },
        {
        title: '服务区',
        number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#40faee',
            fontWeight: 'bold',
            },
        },
        unit: '个',
        },
        {
        title: '收费站',
        number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#4d99fc',
            fontWeight: 'bold',
            },
        },
        unit: '个',
        },
        {
        title: '超限站',
        number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#f46827',
            fontWeight: 'bold',
            },
        },
        unit: '个',
        },
        {
        title: '停车区',
        number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
            fill: '#40faee',
            fontWeight: 'bold',
            },
        },
        unit: '个',
        },
    ]
    }

function randomExtend(minNum, maxNum) {
    if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
    } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    }
}

class VisualTopShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            digitalFlopData: getData()
        };
    }

    render() {
        return(
            <div id="digital-flop">
                {this.state.digitalFlopData.map(item => (
                    <div className="digital-flop-item" key={item.title}>
                    <div className="digital-flop-title">{item.title}</div>
                    <div className="digital-flop">
                        <DigitalFlop config={item.number} style={{ width: '100px', height: '50px' }} />
                        <div className="unit">{item.unit}</div>
                    </div>
                    </div>
                ))}

                <Decoration10 />
            </div>
        );
    }
};

export default VisualTopShow;