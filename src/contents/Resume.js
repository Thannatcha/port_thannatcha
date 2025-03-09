import React, { Component } from 'react'
import Widecard from '../components/Widecard';
import Wd from '../components/Wd';
import W from '../components/W';


class Resume extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Resume</h1>
                <Widecard title="Education" where7="Lopburi Technical College" where8="- Information Technology" f ="2019" t="2021"
                where="King Mongkut's University of Technology North Bangkok" where1="- Electronic of Computer Technology" from="2023" to="Present"/>

                <div>
                <W ti="Work Experiences" where9="- Worked at CJ Supermarket from March to May" fr="2022" too="2023"/>
                
                </div>
                
                <div>
                <Wd title="Soft Skills" where2="- Easily adaptable to sociaty " where3="- Time Management"
                where4="- Collaboration & Teamwork " where5="- Empathetic listening"/>
                </div>
            </div>
            
        )
    }
}
export default Resume;