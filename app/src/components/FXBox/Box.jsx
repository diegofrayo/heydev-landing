import React, {Component, PropTypes} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        let justifyContent;
        let alignItems;
        let flexDirection;
        let flexWrap;

        if (this.props.end) {
            justifyContent = 'flex-end';
        }
        if (this.props.start) {
            justifyContent = 'flex-start';
        }
        if (this.props.center) {
            justifyContent = 'center';
        }
        if (this.props.spaceAround) {
            justifyContent = 'space-around'
        }
        if (this.props.spaceBetween) {
            justifyContent = 'space-between'
        }
        if (this.props.middle) {
            alignItems = 'center';
        }
        if (this.props.top) {
            alignItems = 'flex-start';
        }
        if (this.props.bottom) {
            alignItems = 'flex-end';
        }
        if (this.props.col) {
            flexDirection = 'column';
        }
        if (this.props.row) {
            flexDirection = 'row'
        }
        if (this.props.wrap) {
            flexWrap = 'wrap'
        }

        return (
            <div style={Object.assign({},
                {
                    display: 'flex',
                    flex: this.props.flexed && this.props.flexed ? 1 : 'none',
                    justifyContent,
                    alignItems,
                    flexDirection,
                    flexWrap: flexWrap ? flexWrap : 'nowrap'
                },
                this.props.style && this.props.style
            )}>
                {this.props.children}
            </div>
        )
    }
}
Box.propTypes = {
    middle: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    start: PropTypes.bool,
    center: PropTypes.bool,
    end: PropTypes.bool,
    flexed: PropTypes.bool,
    children: PropTypes.any,
    style: PropTypes.object,
    col: PropTypes.bool,
    row: PropTypes.bool,
    spaceAround: PropTypes.bool,
    spaceBetween: PropTypes.bool
};

export default Box;