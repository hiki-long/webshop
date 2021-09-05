import { render } from 'less';
import React from 'react';
import VisualHeader from './VisualHeader';
import VisualRanking from './VisualRanking';
import VisualTopShow from './VisualTopShow';


class VisualMain extends React.Component {
    render() {
        return(
            <div>
                <VisualHeader />
                <div className="main-content">
                    <VisualTopShow />
                    <div className="block-left-right-content">
                        <VisualRanking />
                    </div>
                </div>
            </div>
        );
    }
};

export default VisualMain;