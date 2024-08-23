import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../explore.scss';
import DMBG from './assets/DMBG.png';
import DMLOGO from './assets/DMLOGO.png';
import loginLogo from './assets/loginLogo.png';
import Login from './Login';

const Explore = ({ onSubmit = () => {} }) => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL || 'https://dealmate-backend.vercel.app/';

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(inputValue);
    
        try {
            const response = await fetch(`${apiUrl}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: 'test@example.com', password: 'password', name: 'Test User' }), // Use actual data
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Response data:', data);
            // Handle successful registration (e.g., navigate to another page or show a success message)
        } catch (error) {
            console.error('Error fetching registration results:', error);
        }
    };

    const loginAct = () => {
        const logintab = document.querySelector('.Login');
        if (logintab.classList.contains('active')) {
            logintab.classList.remove('active');
        } else {
            logintab.classList.add('active');
        }
    };

    return (
        <div className="Explore">
            <img className="exploreBG" src={DMBG} alt="bg" />
            <div className="Navbar">
                <div className="navTitle">
                    <img className="logo" src={DMLOGO} alt="logo" width="auto" />
                    <a className="name" href="/">DealMate</a>
                </div>
                <div className="nav-items">
                    <a href="/learn">LEARN</a>
                    <a id="exploreCTA" href="/explore">EXPLORE</a>
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
            <div className="darkBG"></div>
            <div className="explore-content">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="123 Easier Way, Pittsburgh, PA 15221" name="addressSearch" value={inputValue} onChange={handleInputChange} />
                    <button>Search</button>
                </form>
                {/*<div className="sub-content">
                    <div className="user-type-inter">
                        <h6>Sell A Property</h6>
                        <div className="user-content">
                            <img src="" alt="" />
                            <div className="bar"></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="refferal-points">
                        <h6>My Referral Points</h6>
                        <div className="user-content">
                            <img src="" alt="" />
                            <p>Log-In To View Points</p>
                        </div>
                    </div>
                    <div className="completed-deals">
                        <h6>Completed Deals</h6>
                        <div className="user-content">
                            <img src="" alt="" />
                            <h4>69,000</h4>
                        </div>
                    </div>
                </div>*/}
            </div>
            <Login />
            <div className="comingSoon">
                <h2>Coming Soon</h2>
            </div>
        </div>
    );
};

export default Explore;