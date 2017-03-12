import React, { PropTypes, Component } from 'react';
import PageSection from '../../components/PageSection/PageSection';
import Box from '../../components/FXBox/Box';


export default class OurServicesPage extends Component {
    render() {
        return(
            <div>
                <PageSection>
                    <Box flexed style={{ marginTop: 50, backgroundColor: '#eee' }}>
                        our services
                    </Box>
                </PageSection>
            </div>
        )
    }
}