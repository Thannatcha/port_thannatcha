import React , { Component } from 'react'
import Navitems from './Navintems'

class Navbar extends Component {
    constructor (props){
        super(props);
        this.state = {
            'NavItemActive':''
        }
    }
    activeitem = (item)=>{
        if(this.state.NavItemActive.length > 0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive': item},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render(){
        return(
            <nav>
                <ul>
                    <Navitems item="HOME" tolink='/' activenev={this.activeitem}></Navitems>
                    <Navitems item="ABOUT ME" tolink='/about' activenev={this.activeitem}></Navitems>
                    <Navitems item="SKILL" tolink='/skill' activenev={this.activeitem}></Navitems>
                    <Navitems item="CONTACT" tolink='/contact' activenev={this.activeitem}></Navitems>
                </ul>
                <footer>
                    <div className="social">

                        <a href="https://github.com/Thannatcha/port_thannatcha" target="_blank" rel="noopender noreferrer">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/https://www.facebook.com/thannatcha.potitanod.7/" target="_blank" rel="noopender noreferrer">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/yeen.thanat/" target="_blank" rel="noopender noreferrer">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </footer>
            </nav>
        )
    }
}

export default Navbar;