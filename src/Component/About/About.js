import React, {Component} from 'react'
import './About.css'


export default class About extends Component{
    constructor(props){
        super(props)
            this.state={
                position: props.position
            }
    }
    render(){
        return(
            <div className="About">
                <div className="aboutContentContainer">
                    <div className="aboutImg"></div>
                    <div className="aboutBio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
                    <div className="socialMediaContainer">
                        <div className="insta">instagram</div>
                        <div className="flicker">flicker</div>
                        <div className="facebook">facebook</div>
                        <div className="twitter">twitter</div>
                    </div>
                </div>
            </div>
        )
    }
}