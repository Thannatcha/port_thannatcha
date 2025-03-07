import React , { Component } from 'react'
import Navitems from './Navintems'

class Navbar extends Component {
    constructor (props){
        super(props);
        this.state = {
            'NavItem':''
        }
    }
    render(){
        return(
            <nav>
                <ul>
                    <Navitems item="HOME" tolink='/'></Navitems>
                    <Navitems item="ABOUT ME" tolink='/about'></Navitems>
                    <Navitems item="RESUME" tolink='/resume'></Navitems>
                    <Navitems item="SKILL" tolink='/skill'></Navitems>
                    <Navitems item="CONTACT" tolink='/contact'></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;