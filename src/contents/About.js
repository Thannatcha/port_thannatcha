import React, { Component } from 'react'
//import Widecard from '../components/Widecard';
//import Wd from '../components/Wd';
//import W from '../components/W';

class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="/image/Thannat.jpg" alt="profile" className="profilepic"/>
                <h2>Hi I'm Thannatcha</h2>
                <p style={{ textAlign: 'left', textIndent:'5%'}}>I am a second-year student at King Mongkut's University of Technology North Bangkok, majoring in Electronic Computer Technology. I have a keen interest in web design and possess the ability to develop websites using various languages, including HTML, CSS, and JavaScript. 
                    I am eager to continue learning and enhancing my skills to better meet the needs of teams and organizations.</p><br/>
                <h2>My Resume</h2>
                
                <p style={{ textAlign: 'left'}}>
                    <h3>Education</h3>
                Lopburi Technical College <br/>- Information Technology <br/> 2019-2021<br/>
                King Mongkut's University of Technology North Bangkok <br/>- Electronic of Computer Technology <br/>2023-Present
               <h3>Work Experiences</h3> - Worked at CJ Supermarket from March to May 2022-2023<br/>
               <h3>Soft Skills</h3> - Easily adaptable to sociaty <br/> - Time Management
               <br/>- Collaboration & Teamwork <br/>- Empathetic listening </p>
            
            </div>
            
        )
    }
}

export default About;