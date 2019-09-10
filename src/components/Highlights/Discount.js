import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import MyButton from '../utils/MyButton'
import { Button } from '@material-ui/core';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }


    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(()=> {
            this.percentage()
        }, 30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Zoom right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <MyButton 
                                 text="Purchase tickets"
                                 bck="#ffa800"
                                 color="ffffff"
                                link="https://www.google.com"
                            />
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Discount;
