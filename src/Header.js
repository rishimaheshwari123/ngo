import React from 'react'
import logo from './img/ngologo.png';
import { useState } from "react";


const Header = () => {
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleResponsive = () => {
        setIsResponsive(prevState => !prevState);
    };
    return (
        <div>

            <head>
                <link rel="stylesheet" href="./style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </head>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">

                <div className="container-fluid">
                    <span className="nav-item-logo"><img src={logo} /></span>

                    <button className="navbar-toggler" type="button" onClick={toggleResponsive}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isResponsive ? 'show' : ''}`} id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item ">
                                <a class="nav-link" href="/home">Home</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="/about"> About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/programmes">    Our Programmes </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/gallery" >   Gallery   </a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/vision">Registrations</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/appeal">  Appeal</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/trustees">  Trustees</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/contact">     Contact</a>
                            </li>
                            <button className="btndonate"><a href='/donate'>Donate</a></button>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;