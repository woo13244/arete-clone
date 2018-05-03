import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css'
import FontAwesome from 'react-fontawesome'
export default class extends React.Component {
  render() {
    return (
      <CarouselProvider className="Carousel"
        naturalSlideWidth={900}
        naturalSlideHeight={100}
        totalSlides={5}
        visibleSlides={3}
      >        
        <ButtonBack className="carouselButtons"><div className="arrowLeft"></div></ButtonBack>
        <Slider className="Slider" >
          <Slide index={0}></Slide>
          <Slide index={1} className="carouselSlide"><div>portraits</div><FontAwesome name="long-arrow-down fa-" className="carouselArrowDown"/></Slide>
          <Slide index={2} className="carouselSlide"><div>landscapes</div><FontAwesome name="long-arrow-down fa-"className="carouselArrowDown"/></Slide>
          <Slide index={3} className="carouselSlide"><div>wildlife</div><FontAwesome name="long-arrow-down fa-"className="carouselArrowDown"/></Slide>
          <Slide index={4}></Slide>
        </Slider>
        <ButtonNext className="carouselButtons"><div className="arrowRight"></div></ButtonNext>
      </CarouselProvider>
    );
  }
}