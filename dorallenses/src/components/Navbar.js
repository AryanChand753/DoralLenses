// Import Styles
import "../styles/NavStyles.css";

// Import React Components
import React from "react";
import { Auth } from "./auth"

const Navbar = () => {


    return (
        <div className="Navbar">
            <div className="container">
                <div className="logo">Lenses Magazine</div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#calendar">Calendar</a>
                    <div className="dropdown">
                        <a className="dropbtn">Links</a>
                        <div className="dropdown-content">
                            <a href="#">&Mu;&Alpha;&Theta; Bubbler</a>
                            <a href="#">Regional Test Bank</a>
                            <a href="#">States Test Bank</a>
                            <a href="#">Full Test Bank</a>
                            <a href="#">&Mu;&Alpha;&Theta; Test Bank</a>
                            <a href="#">Springssoft</a>
                        </div>
                    </div>
                </div>
                <div className="login-container"><Auth /></div>
            </div>
        </div>
    );
}

export default Navbar;