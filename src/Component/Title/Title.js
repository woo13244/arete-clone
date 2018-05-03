import React, { Component } from 'react'
import './Title.css'
import Carousel from '../Carousel/Carousel'
export default class Title extends Component{
    render(){
        return(
            <div className="Title">
                <div className="titleBackground"></div>
                <div className="titleContainer">
                    <div>
                        <div className="titleName">Woo Lee</div>
                        <div className="titleJob">web developer</div>
                        <Carousel/>
                    </div>
                </div>
            </div>
        )
    }
}