import React, { Component } from 'react'
import Social from '../components/Social'

class Contact extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : Thannatcha2829@gmail.com</h3>
                <h3>Instagram : yeen.thanat</h3>
                <Social/>
            </div>
        );
    }
}
export default Contact;