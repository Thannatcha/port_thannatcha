import React , { Component } from 'react'

class Widecard extends Component{
    render(){
        return(
            <div className="widecard">
                <div className="wide-con">
                    <h3>{this.props.title}</h3>
                    <h4 className="firsttext">{this.props.where7}</h4>
                    <h4 className="firsttext">{this.props.where8}</h4>
                    <h4 className="firsttext">{this.props.f}-{this.props.t}</h4>
                                        
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.where1}</h4>
                    <h4 className="secondtext">{this.props.from}-{this.props.to}</h4>
            
                    <h3>{this.props.ti}</h3>
                    <h4 className="text">{this.props.where9}</h4>
                    <h4 className="secondtext">{this.props.fr}-{this.props.too}</h4>
                    
                </div>
                
            </div>
        )
    }
}
export default Widecard;