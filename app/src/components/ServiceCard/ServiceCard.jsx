import React, {Component, PropTypes} from 'react';

class ServiceCard extends Component {
    constructor(props) {
        super(props);

        this.state = { isHovered: false };
    }
    render() {
       const backgroundColor = this.state.isHovered ? 'white' : 'transparent';
        return(
            <div
                onMouseEnter={() => this.setState({isHovered: true})}
                onMouseLeave={() => this.setState({isHovered: false})}

                style={{
                    cursor: 'pointer',
                    height: '85%',
                    margin: 'auto 65px',
                    display: 'flex',
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor }}
            >
                text
            </div>
        )
    }
}
ServiceCard.propTypes = {

};

export default ServiceCard;