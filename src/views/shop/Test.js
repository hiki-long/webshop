import React from 'react';
import OneItemInfo from '../item/OneItemInfo';

class Test extends React.Component {
    componentDidMount() {
        console.log("uuid = " + this.props.history.location.state.uuid)
    }

    render() {
        return(
            <div>
                <OneItemInfo uuid={this.props.history.location.state.uuid}/>
            </div>
        );
    }
}

export default Test;