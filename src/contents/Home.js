import React , { Component } from 'react'
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'


class Home extends Component {
    render(){
        return(
            <div className="condiv home">
                <img src="https://i.pinimg.com/originals/f2/d5/15/f2d5154a84a39461cf904dbf85784e31.jpg" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Thannatcha.','yeen']} speed={70} eraseDelay={100} className="typingeffect" />
                <Social/>
            </div>
        )
    }
}
export default Home;