import React , { Component } from 'react'

class Wd extends Component{
    render(){
        return(
            <div className="wd">
                <div className="w-c">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.where2}<br/>{this.props.where3}<br/>{this.props.where4}<br/>{this.props.where5}</h4>
                </div>
                
            </div>
        )
    }
}
export default Wd;