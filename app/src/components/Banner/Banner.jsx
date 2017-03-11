import React, {Component, PropTypes} from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return(
            <div style={{ display: 'flex' }}>
                {this.props.children}
            </div>
        )
    }
}
Banner.propTypes = {

};

export default Banner;