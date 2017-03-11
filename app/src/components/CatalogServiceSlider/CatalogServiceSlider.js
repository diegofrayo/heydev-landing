/**
 * Created by lejoss on 3/10/17.
 */
import React, {Component, PropTypes} from 'react';
import Box from '../FXBox/Box';
import ServiceCard from '../ServiceCard/ServiceCard';
import 'font-awesome/css/font-awesome.css';


const configObject = {};

class CatalogServiceSlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section style={{ display: 'flex', flexDirection: 'row', flex: 2, backgroundColor: '#F0F0F0', padding: 12 }} >
                <Box end middle style={{ width: 150, color: '#bdbdbd', cursor: 'pointer' }}>
                    <i className="fa fa-4x fa-angle-left" aria-hidden="true" />
                </Box>
                <Box flexed >
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </Box>
                <Box start middle style={{ width: 150, color: '#bdbdbd' , cursor: 'pointer'}}>
                    <i className="fa fa-4x fa-angle-right" aria-hidden="true" />
                </Box>

            </section>
        )
    }
}

CatalogServiceSlider.propTypes = {

};

export default CatalogServiceSlider;