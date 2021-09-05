import React from 'react';
import { Decoration5, Decoration8 } from '@jiaminghi/data-view-react'
import './VisualHeader.css'
class VisualHeader extends React.Component {

    render() {
        return(
            <div className="top-header">
                <Decoration8 className="header-left-decoration"/>
                <Decoration5 className="header-center-decoration" />
                <Decoration8 className="header-right-decoration" reverse={true} />
                <div className="center-title">数据汇总</div>
            </div>
        );
    }
};

export default VisualHeader;