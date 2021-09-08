import React from 'react';
import './VisualTopShow.css';
import { DigitalFlop, Decoration10 } from '@jiaminghi/data-view-react'
function getData() {
    return [
        {
        title: '食品类',
        number: {
            number: [61],
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
        title: '电器类',
        number: {
            number: [245],
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
        title: '手机类',
        number: {
            number: [236],
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
        title: '香水类',
        number: {
            number: [24],
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
        title: '酒类',
        number: {
            number: [31],
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
        title: '服装类',
        number: {
            number: [10],
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