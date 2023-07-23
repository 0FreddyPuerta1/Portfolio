import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
const NavBar = () => {
    return(
        <div className="navbar">
            <div className="my-name">
                <FontAwesomeIcon icon={faMicrochip} fade style={{color: "#ffffff",}} />
                <h4>0FreddyPuerta1</h4>
            </div>
            <div className="links">
                <ul>
                    <li><a href=""><p className="hashtag">#</p><p className="link-name">home</p></a></li>
                    <li><a href=""><p className="hashtag">#</p><p className="link-name">about-me</p></a></li>
                    <li><a href=""><p className="hashtag">#</p><p className="link-name">projects</p></a></li>
                    <li><a href=""><p className="hashtag">#</p><p className="link-name">blog</p></a></li>
                    <li><a href=""><p className="hashtag">#</p><p className="link-name">contact</p></a></li>
                </ul>
            </div>
        </div>
    )
}


export default NavBar;