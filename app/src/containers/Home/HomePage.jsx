import React, {PropTypes, Component} from 'react';
import Box from '../../components/FXBox/Box';
import PageSection from '../../components/PageSection/PageSection';
import CatalogServiceSlider from '../../components/CatalogServiceSlider/CatalogServiceSlider';

export default class HomePage extends Component {
    render() {
        return(
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <PageSection>
                    <Box flexed col style={{ backgroundColor: '#ebebeb' }}>
                        <Box flexed center bottom style={{ fontSize: 28, padding: 8, color: "#bdbdbd" }}>
                            Some dummy text that we need to display.
                        </Box>
                        <Box flexed center style={{ padding: 8 }}>
                            <Box center middle style={{ height: 35, width: 150, backgroundColor: '#bdbdbd', color: '#f1f1f1' }}>
                                dummy button
                            </Box>
                        </Box>
                    </Box>
                </PageSection>
                <PageSection col>
                    <Box center middle style={{ height: 120 ,backgroundColor: '#F0F0F0', color: '#bdbdbd', fontSize: 28 }}>
                        This can be a useful title.
                    </Box>
                    <CatalogServiceSlider slidesToRender={3} />
                    <Box flexed center middle style={{ backgroundColor: 'white' }}>
                        possible tech stack or clients list
                    </Box>
                </PageSection>
                <PageSection>
                    <Box flexed col style={{ backgroundColor: '#F4F4F4' }}>
                        <Box row style={{ flex: 2 }} >
                            <Box flexed >1 brand area, display image etc...</Box>
                            <Box col style={{ flex: 2, padding: 8 }}>
                                <span>2 contact info</span>
                                <Box flexed style={{ width: 350, backgroundColor: 'white' }}>
                                    form
                                </Box>
                            </Box>
                        </Box>
                        <Box flexed style={{ backgroundColor: 'white' }} >3 footer ?</Box>
                    </Box>
                </PageSection>
            </div>
        )
    }
}