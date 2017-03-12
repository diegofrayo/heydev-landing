/**
 * Created by lejoss on 3/12/17.
 */
import React, {Component, PropTypes} from 'react';
import PageSection from '../../components/PageSection/PageSection';
import Box from '../../components/FXBox/Box';

class OurProfile extends Component {
    render() {
        return(
            <div>
                <PageSection>
                    <Box flexed style={{ marginTop: 50, backgroundColor: '#eee' }}>
                        our PROFILE
                    </Box>
                </PageSection>
            </div>
        )
    }
}

export default OurProfile;