import React, { Component } from 'react'

class Skill extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         'myskills':['HTML','PHP']
    //     }
    //}
    // activeitem = (item)=>{
    //     if(this.state.myskills.length > 0){
    //         document.getElementById(this.state.myskills).classList.remove('active');
    //     }
    //     this.setState({'myskills': item},()=>{
    //         document.getElementById(this.state.myskills).classList.add('active');
    //     })
    // }
    render(){
        return (
            <div className="condiv skill">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {/* {this.state.myskills.map((value) =>{
                        return<li>{value}</li>
                    })} */}
                    <button className='button1'>HTML</button>
                    <button className='button2'>PHP</button>
                </ul>
                
            </div>

        );
    }
    
}
export default Skill;