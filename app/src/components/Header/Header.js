import React, {Component, PropTypes} from 'react';

class Header extends Component {
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
Header.propTypes = {

};

export default Header;