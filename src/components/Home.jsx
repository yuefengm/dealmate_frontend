import React, { useEffect, useState } from "react";
import '../home.scss';
import DMBG from './assets/DMBG.png'
import DMLOGO from './assets/DMLOGO.png'
import loginLogo from './assets/loginLogo.png'
import Login from "./Login";
import CreateAcc from "./CreateAcc";
import Registered from "./Registered";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Home() {
    function loginAct() {
        const logintab = document.querySelector('.Login')

        if(logintab.classList.contains('active')) {
            logintab.classList.remove('active')
        } else {
            logintab.classList.add('active')
        }
    }
    function creaetAct() {
        const createtab = document.querySelector('.Create-Account')

        if(createtab.classList.contains('active')) {
            createtab.classList.remove('active')
        } else {
            createtab.classList.add('active')
        }
    }
    return(
    <div className="Home">
        <img 
            className="homeBG" 
            src={DMBG} 
            alt="bg"
        />
        
        <div className="Navbar">
            <div className="navTitle">
            <img 
                className="logo" 
                src={DMLOGO} 
                alt="logo" 
                width="auto"
            />
            <a className="name" href="/">DealMate</a>
            </div>
            <div className="nav-items">
                 <a href="https://www.facebook.com/groups/dealmatenetwork/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.instagram.com/dealmate.network/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://www.linkedin.com/company/dealmate-network/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.tiktok.com/@dealmate.network" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="lg" />
        </a> 
            </div>
            <div onClick={loginAct} className="nav-login">
                <img src={loginLogo} alt="" />
                <p>Log In</p>
            </div>
            <a href="/" className="nav-signout removed">
                <img src={loginLogo} alt="" />
                <p>Sign Out</p>
            </a>
            <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
        </div>
        
        <div className="darkBG"></div>
        
        <div className="homeText">
            <h2>REAL ESTATE 2.0</h2>
            <div className="home-create-acc active" onClick={creaetAct}>
                <p>CREATE ACCOUNT</p>
            </div>
            <a href="/learn" className="home-learn-btn" >
                Learn More
            </a>
        </div>
        <Login />
        <CreateAcc />
        <Registered />
        </div>
    )
}
export default Home