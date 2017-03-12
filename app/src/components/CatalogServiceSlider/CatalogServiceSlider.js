/**
 * Created by lejoss on 3/10/17.
 */
import React, {Component, PropTypes} from 'react';
import Box from '../FXBox/Box';
import ServiceCard from '../ServiceCard/ServiceCard';
// import Slider from 'react-slick';
import 'font-awesome/css/font-awesome.css';


const children = [1, 2, 3, 4, 5, 6];

class CatalogServiceSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { which: 0, lazyList: [] }
    };
    componentDidMount() {
      // set event listener for 'resize'
    }

    componentWillUnmount() {
        // remove listener for 'resize'
    }

    handleNext = () => {
        console.log('next');
        if ( this.state.which < children.length -1 ) {
            this.setState({ which: ++this.state.which })
        } else {
            //if we are the last slide, we switch back to the first one
            this.setState({ which: ++this.state.which })
        }
    };

    handlePrev = () => {
        console.log('prev');
        if ( this.state.which > 0 ) {
            this.setState({ which: --this.state.which })
        } else {
            //switch back to the last one
            this.setState({ which: children.length -1 })
        }
    };

    render() {
        const lazyList = [];



        let slidesToRender = children.map((child, key) => {
            if ( this.props.slidesToRender && this.props.slidesToRender > key ) {
                 return <ServiceCard key={key}>{key}</ServiceCard>
            } else if (!this.props.slidesToRender) {
                return <ServiceCard key={key}>{key}</ServiceCard>
            }
        });

        const leftArrowBtn = (
            <Box middle end style={{ width: 150, color: '#bdbdbd', cursor: 'pointer' }}>
                <i onClick={this.handlePrev} className="fa fa-4x fa-angle-left" aria-hidden="true" />
            </Box>
        );

        const rightArrowBtn = (
            <Box start middle style={{ width: 150, color: '#bdbdbd' , cursor: 'pointer'}}>
                <i onClick={this.handleNext} className="fa fa-4x fa-angle-right" aria-hidden="true" />
            </Box>
        );

        return(
            <section style={{ display: 'flex', flexDirection: 'row', flex: 2, backgroundColor: '#F0F0F0', padding: 12 }} >
                {leftArrowBtn}
                <Box flexed >
                    {slidesToRender}
                </Box>
                {rightArrowBtn}
            </section>
        )
    }
}

CatalogServiceSlider.propTypes = {
    slidesToRender: PropTypes.number
};

export default CatalogServiceSlider;