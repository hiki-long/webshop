import { WaterLevelPond } from '@jiaminghi/data-view-react';
import React from 'react';
import './WaterLevelChart.css'
const config = {
    data: [45],
    shape: 'round',
    waveHeight: 100,
    waveNum: 4,
}

class WaterLevelChart extends React.Component{
    render() {
        return (
            <div id="water-level-chart">
                <div className="water-level-chart-title">计划资金累计完成情况</div>

                <div className="water-level-chart-details">
                    累计完成<span>235,680</span>元
                </div>

                <div className="chart-container">
                    <WaterLevelPond config={config} />
                </div>
            </div>
        );
    }
};

export default WaterLevelChart;