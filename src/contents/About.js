import React, { Component } from 'react'

class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img
                    src="https://i.pinimg.com/originals/f2/d5/15/f2d5154a84a39461cf904dbf85784e31.jpg"
                    alt="profile"
                    className="profilepic"
                />
                <h3>Hi I'm Thannatcha</h3>
                <p>f2d5154a84a39461cf904dbf85784e31</p>
            </div>
        )
    }
}

export default About;