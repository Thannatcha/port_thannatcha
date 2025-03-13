import React , { Component } from 'react'
//import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'


class Home extends Component {
    render(){
        return(
            
            <div className="condiv home">
                
                <img src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/355622173_3513265168957147_4607387343439816604_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE7DmhdmE1pu_VKuV8azbvfq7ckhFSGSYSrtySEVIZJhFgNp0ennoIHgqoMu3NVO4FiU37jAG6GOXn0wQUrepnq&_nc_ohc=p4odBv__D_cQ7kNvgHVSVYb&_nc_oc=AdjPIJ3C8Wh3VhcaFmaZF5Bpt3pJwrmbRu7uk8CY6d23LSpBpV6U48tRt5lwGbo-p4k&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=AyuPlC9HFzDxyLnA9JksE5v&oh=00_AYGD_yHNyR61H-GID5zq0VAbj42dWmbNLVDwW0vI_eYtxw&oe=67D39DC7" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['Hello','I am Thannatcha']} speed={70} eraseDelay={80} className="typingeffect" />
                
            </div>
        
        )
    }
}
export default Home;