import React, { Component } from 'react'
import Widecard from '../components/Widecard';
import Wd from '../components/Wd';
import W from '../components/W';

class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="https://as-prod.asyncgw.teams.microsoft.com/v1/objects/0-jhb-d11-a1022b0ac8eb31b1cf6041994539dd16/views/imgo"
                    alt="profile" className="profilepic"/>
                <h2>Hi I'm Thannatcha</h2>
                <p style={{ textAlign: 'left' }}>"I am a second-year student at King Mongkut's University of Technology North Bangkok, majoring in Electronic Computer Technology. I have a keen interest in web design and possess the ability to develop websites using various languages, including HTML, CSS, and JavaScript. 
                    I am eager to continue learning and enhancing my skills to better meet the needs of teams and organizations.</p>
                <h2>My Resume</h2>
                <p style={{ textAlign: 'left' }}>
                <Widecard title="Education" where7="Lopburi Technical College" where8="- Information Technology" f ="2019" t="2021"
                where="King Mongkut's University of Technology North Bangkok" where1="- Electronic of Computer Technology" from="2023" to="Present"/>
                <W ti="Work Experiences" where9="- Worked at CJ Supermarket from March to May" fr="2022" too="2023"/><br/>
                <Wd title="Soft Skills" where2="- Easily adaptable to sociaty " where3="- Time Management"
                where4="- Collaboration & Teamwork " where5="- Empathetic listening"/>
                </p>
            
            </div>
            
        )
    }
}

export default About;