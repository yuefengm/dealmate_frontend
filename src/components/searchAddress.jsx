import React from 'react';
import { useLocation } from 'react-router-dom';
import '../searchAddress.scss';
import DMBG from './assets/DMBG.png'
import DMLOGO from './assets/DMLOGO.png'
import loginLogo from './assets/loginLogo.png'
import phonePic from './assets/phonePic.png'
import Login from "./Login";

const SearchAddress = () => {
    const location = useLocation();
    const searchResults = location.state?.searchResults || [];

    function loginAct() {
        const logintab = document.querySelector('.Login')

        if(logintab.classList.contains('active')) {
            logintab.classList.remove('active')
        } else {
            logintab.classList.add('active')
        }
    }

    return (
        <div className="SearchAddress">
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
                <a href="/learn">LEARN</a>
                <a href="/explore">EXPLORE</a>
                <a href="/">AFFILIATES</a>
            </div>
            <div onClick={loginAct} className="nav-login">
                <img src={loginLogo} alt="" />
                <p>Log In</p>
            </div>
            <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
        </div>
            {searchResults.length === 1 ? (
                <div className='intended-address'>
                    <p>Name: {searchResults[0].A}</p>
                    <p>Pulled Address: {searchResults[0].B}</p>
                    <p>Mailing Address: {searchResults[0].C}</p>
                    <p>Phone Numbers: {searchResults[0].D}</p>
                    <p>Emails: {searchResults[0].E}</p>
                    <p>Zillow: {searchResults[0].F}</p>
                    <p>Source: {searchResults[0].G}</p>
                </div>
            ) : (
                <div className='address-results'>
                <div className="buffer"></div>
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>
                            <p>Name: {result.A}</p>
                            <p>Pulled Address: {result.B}</p>
                        </li>
                    ))}
                </ul>
                <div className="buffer"></div>
                </div>
            )}
            <Login />

        </div>
    );
};

export default SearchAddress;