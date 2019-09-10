import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }


    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
           this.setState({
               discountStart: this.state.discountStart + 1
           })
        }
    }

    componentDidUpdate() {
        setTimeout(()=> {
            this.porcentage()
        },30)
    }



    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    
                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div>
                                button
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Discount;
