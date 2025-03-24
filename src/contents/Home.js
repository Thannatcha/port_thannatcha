import React , { Component } from 'react'
//import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'


class Home extends Component {
    render(){
        return(
            
            <div className="condiv home">
                
                <img src="/image/than.jpg" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['Hello','I am Thannatcha']} speed={70} eraseDelay={80} className="typingeffect" />
                
            </div>
        
        )
    }
}
export default Home;