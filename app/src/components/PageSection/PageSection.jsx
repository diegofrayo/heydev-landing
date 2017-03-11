import React, {Component, PropTypes} from 'react';

class PageSection extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const flexDirection = this.props.col && 'column' || this.props.row && 'row';

        return(
            <section style={{ display: 'flex', flex: 1, height: '100vh', flexDirection }}>
                {this.props.children}
            </section>
        )
    }
}
// PageSection.propTypes = {
//     col: PropsTypes.bool,
//     row: PropsTypes.bool// one of ? ...
// };

export default PageSection;