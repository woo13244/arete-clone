import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css'
import FontAwesome from 'react-fontawesome'


export default class extends React.Component {
  constructor(){
    super()
      this.state={
        slide1: true,
        slide2: true,
        slide3: true,
        zoom1: true,
        zoom2: true,
        zoom3: true,
        currentNum: 0
      }
  }
  componentDidMount(){
    this.handleZoom()
  }

  
  handleZoom(sign){
    let currentSlide = this.state.currentNum + 1
    let str = "zoom" + currentSlide
    this.setState({
      zoom1: true,
      zoom2: true,
      zoom3: true,
      [str] : false
    },()=>{console.log(this.state)})
  }


  render() {

    return (
      <CarouselProvider className="Carousel"
        naturalSlideWidth={900}
        naturalSlideHeight={100}
        totalSlides={5}
        visibleSlides={3}
        currentSlide={this.state.currentNum}
      >        
        <ButtonBack className="carouselButtons" onClick={()=>{this.setState({currentNum: this.state.currentNum - 1}, ()=>{this.handleZoom()})}}><div className="arrowLeft"></div></ButtonBack>
        <Slider className="Slider" >
          <Slide index={0}></Slide>
          <Slide index={1} className={this.state.zoom1 ? "carouselSlide" : "carouselSlideZoom"} onMouseEnter={()=>{this.setState({slide1: !this.state.slide1})}} onMouseLeave={()=>{this.setState({slide1: !this.state.slide1})}}><div>portraits</div><div className={this.state.slide1 ? "arrowDown" : "arrowDownHover"}></div></Slide>
          <Slide index={2} className={this.state.zoom2 ? "carouselSlide" : "carouselSlideZoom"} onMouseEnter={()=>{this.setState({slide2: !this.state.slide2})}} onMouseLeave={()=>{this.setState({slide2: !this.state.slide2})}}><div>landscapes</div><div className={this.state.slide2 ? "arrowDown" : "arrowDownHover"}></div></Slide>
          <Slide index={3} className={this.state.zoom3 ? "carouselSlide" : "carouselSlideZoom"} onMouseEnter={()=>{this.setState({slide3: !this.state.slide3})}} onMouseLeave={()=>{this.setState({slide3: !this.state.slide3})}}><div>wildlife</div><div className={this.state.slide3 ? "arrowDown" : "arrowDownHover"}></div></Slide>
          <Slide index={4}></Slide>
        </Slider>
        <ButtonNext className="carouselButtons" onClick={()=>{this.setState({currentNum: this.state.currentNum + 1},()=>{this.handleZoom()})}}><div className="arrowRight"></div></ButtonNext>
      </CarouselProvider>
    );
  }
}