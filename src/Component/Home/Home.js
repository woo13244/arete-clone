import React, {Component} from 'react'
import './Home.css'
import FontAwesome from 'react-fontawesome'
import Title from '../Title/Title'
export default class Home extends Component{
    render(){
        return(
            <div className="Home">
                <div className="aboutTab">
                    <div>
                        <div className="smallArrow"></div>
                        <div>about</div>
                    </div>
                </div>
                <div className="vidContainer">
                    <video autoplay="autoplay" loop="loop" className="videoBackground" >
                        <source src="https://daks2k3a4ib2z.cloudfront.net/5701419a1fdcb0fe29343740/57017d53ae2865457396c178_studiocam-closeup%20(zoom%201)-HD-transcode.mp4" />
                    </video>
                </div>
                <div className="contactTab">
                    <div>
                        <div className="smallArrow"></div>
                        <div>contact</div>
                    </div>
                </div>           
                <Title/>  
            </div>
        )
    }
}