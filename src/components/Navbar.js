import React from 'react';
import { NavLink } from "react-router-dom";

// import LiIcon from "../images/" Add Link image
// import GitIcon from "../images/" Add Git image
import 'normalize.css';
import '../styles/App.css'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar">
                <p className="initials animation" to="/">BC</p>
                <ul className="navBtnCont">

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/">About</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/contact">Contact</NavLink>
                    </li>
                </ul>

            </nav >
        </div >
    )
}