import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './button';
import './NavBar.scss';
import nss from './images/nss-horizontal.svg';
function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className = "navbar">
               <div className = "navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                        <img src = {nss} alt = ''></img>
                    </Link>
                    <div className = "menu-icon" onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/about' className = 'nav-links' onClick = {closeMobileMenu} >
                                About
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/projects' className = 'nav-links' onClick = {closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/portal' className = 'nav-links' onClick = {closeMobileMenu}>
                                Volunteer Portal
                            </Link>
                        </li>
                    </ul>
               </div>
           </nav>
        </>
    )
};
export default NavBar;
