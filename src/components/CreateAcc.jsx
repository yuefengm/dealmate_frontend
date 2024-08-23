import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../createAcc.scss';


function CreateAcc() {
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL || 'https://dealmate-backend.vercel.app';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    function createAct() {
        const createtab = document.querySelector('.Create-Account');
        const deActivate = document.querySelector('.regframe');
    
        if (createtab.classList.contains('active')) {
          deActivate.classList.add('deActive');
    
          setTimeout(() => {
            createtab.classList.remove('active');
            deActivate.classList.remove('deActive');
          }, 500);
        } else {
            createtab.classList.add('deActive');
        }
      }

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch(`${apiUrl}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success, e.g., redirect to another page
                navigate('/');
            } else if (response.status === 500) {
                // Handle specific 500 error
                console.error('Server error (500):', data.message || 'Internal Server Error');
                setError('Server error occurred. Please try again later.');
                const createtab = document.querySelector('.Create-Account');
                const deActivate = document.querySelector('.regframe');
                const removeButton = document.querySelector('.home-create-acc');
                const loginbtn = document.querySelector('.nav-login');
                const signoutbtn = document.querySelector('.nav-signout');
                const registered = document.querySelector('.Registered');
                const addButton = document.querySelector('.home-learn-btn');


                removeButton.classList.remove('active')
                addButton.classList.add("active")   

                if (createtab.classList.contains('active')) {
                deActivate.classList.add('deActive');

                setTimeout(() => {
    
                    registered.classList.add('active')

                }, 250);
            
                setTimeout(() => {
                    createtab.classList.remove('active');
                    deActivate.classList.remove('deActive');
                

                }, 500);
                } else {
                    createtab.classList.add('deActive');
                }   
                loginbtn.classList.add("removed")   
                signoutbtn.classList.remove("removed")   

            } else {
                // Handle error
                setError(data.message || 'An error occurred');
                navigate('/');
            }
        } catch (err) {
            setError('An error occurred while registering.');
        } finally {
            setIsSubmitting(false);
        }
    };




    return (
        <div className="Create-Account regframe">
            <div className="create-acc-content">
            <div onClick={createAct} className="X">
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="regerror">{error}</p>}
                    <div className="input-item">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-item">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-item">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateAcc;