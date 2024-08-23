import React, { useEffect, useState } from "react";
import '../learn.scss';
import DMBG from './assets/DMBG.png'
import DMLOGO from './assets/DMLOGO.png'
import loginLogo from './assets/loginLogo.png'
import phonePic from './assets/phonePic.png'
import Login from "./Login";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';


function Learn() {
    function loginAct() {
        const logintab = document.querySelector('.Login')

        if(logintab.classList.contains('active')) {
            logintab.classList.remove('active')
        } else {
            logintab.classList.add('active')
        }
    }
    return(
    <div className="Learn">
        
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
            <a href="/" className="nav-signout">
                <img src={loginLogo} alt="" />
                <p>Sign Out</p>
            </a>
            <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
        </div>
        
        <div className="learn-content">
            <div className="learn-text-sec1">
                <h2>So, why choose Real Estate 2.0?</h2>
                <p>Unlock real estate success with DealMate. Our platform equips you with all the tools needed to manage transactions from start to finish, all in one place. Simplify your experience, take control, and discover a new way to buy and sell real estate.</p>
                <div className="learn-create-acc">
                    <p>JOIN NOW</p>
                </div>
            </div>
            <div className="learn-text-sec2-wrap">
                <div className="sub-sect1">
                    <h2>Unprecedented Precision</h2>
                    <p>Access incredibly precise property valuations, leveraging AI algorithms that analyze vast datasets with unparalleled accuracy.</p>
                </div>
                <div className="sub-sect2">
                    <h2>Real Estate On Easy Mode</h2>
                    <p>complete entire transactions from start to finish, all within a single interface. With AI technology facilitating every step, from contracts to closing and beyond, you'll feel a newfound confidence, knowing you have an expert on your team every step of the way.</p>
                </div>
                <div className="sub-sect3">
                    <img src={phonePic} alt="" />
                </div>
                <div className="sub-sect4">
                    <div className="sub-text-sec1">
                        <h2>Opportunities Anywhere, Anytime</h2>
                        <p>Seize opportunities regardless of your location, leveraging our platform's expansive marketplace. Whether you're looking to sell your home or find your next property, DealMate offers unparalleled access to a diverse range of markets and creative deal-making opportunities.</p>
                    </div>
                    <div className="sub-text-sec2">
                        <h2>Perfect Property Matches</h2>
                        <p>Experience personalized property recommendations tailored to your unique preferences and criteria, ensuring that every listing aligns with your specific needs and desires.</p>
                    </div>
                </div>
                <div className="sub-sect5">
                    <h2>Closings From the Couch</h2>
                    <p>Simplify the paperwork and signing process with DealMate's intuitive document management system, allowing you to securely store, access, manage, and sign all transaction-related documents in one centralized location.</p>
                </div>
                <div className="sub-sect6">
                    <h2>Real Time Market Insight</h2>
                    <p>Stay ahead of the curve with DealMate's real-time market insights, providing you with up-to-date information, at your fingertips on property trends, pricing fluctuations, and market dynamics.</p>
                </div>
                <div className="sub-sect7">
                <div className="learn-create-acc">
                    <p>GET STARTED</p>
                </div>
                </div>
            </div>
        </div>      
        <Login />  
        
        </div>
    )
}
export default Learn