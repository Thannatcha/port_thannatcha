import React , { Component } from 'react'
import Social from '../components/Social'
//import Profilepic  from '../image/y2.jpg'


class Home extends Component {
    render(){
        return(
            <div className="condiv home">
                <img src="https://i.pinimg.com/originals/f2/d5/15/f2d5154a84a39461cf904dbf85784e31.jpg" alt="profile" className="profilepic"/>
                <p className="typingeffect">I'm Thannatcha</p>
                <Social/>
            </div>
        )
    }
}
export default Home;