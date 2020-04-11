import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShow: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    dropDownLinks = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
        )
    }


    displayDropDown = () => {
        return (
            <ul className='DropDown'>
                    <li className='nav-link'><NavLink to='/' >Home</NavLink></li>
                    <li className='nav-link'><NavLink to='/about'>About</NavLink></li>
                    <li className='nav-link'><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
        )
    }

    render() {
        return (
            <div className='navbar'>
                { this.state.open ?  this.displayMobileMenu() : null}
                {window.innerWidth > 1200 ? this.displayNavBar() : this.displayHamburgerMenu()}
            </div>
        );
    }
}

export default NavBar;