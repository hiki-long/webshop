import React from 'react';
import RoseChart from './RoseChart';
import VisualHeader from './VisualHeader';
import VisualRanking from './VisualRanking';
import VisualTopShow from './VisualTopShow';
import WaterLevelChart from './WaterLevelChart';
import './VisualMain.css';
import ScrollRank from './ScrollRank';

class VisualMain extends React.Component {
    render() {
        return(
            <div>
                <VisualHeader />
                <div className="main-content">
                    <VisualTopShow />
                    <div className="block-left-right-content">
                        {/* <div className="block-top-bottom-content"> */}
                        <VisualRanking />
                        <div className="block-top-content">
                            <RoseChart />
                            <WaterLevelChart />
                            <ScrollRank />
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
};

export default VisualMain;