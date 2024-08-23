import React, { useState } from "react";
import "../login.scss";

function Login() {
  // State for form inputs and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL || 'https://dealmate-backend.vercel.app';

  // Function to toggle login modal visibility
  function loginAct() {
    const logintab = document.querySelector('.Login');
    const deActivate = document.querySelector('.logframe');

    if (logintab.classList.contains('active')) {
      deActivate.classList.add('deActive');

      setTimeout(() => {
        logintab.classList.remove('active');
        deActivate.classList.remove('deActive');
      }, 500);
    } else {
      logintab.classList.add('deActive');
    }
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "loginpassword") setPassword(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${apiUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else if (response.status === 200) {
        // Handle specific 500 error
        
        const logintab = document.querySelector('.Login');
        const loginbtn = document.querySelector('.nav-login');
        const signoutbtn = document.querySelector('.nav-signout');

        const deActivate = document.querySelector('.logframe');
        const removeButton = document.querySelector('.home-create-acc');
        const addButton = document.querySelector('.home-learn-btn');

        removeButton.classList.remove('active')
        addButton.classList.add("active")   

        if (logintab.classList.contains('active')) {
        deActivate.classList.add('deActive');
    
        setTimeout(() => {
            logintab.classList.remove('active');
            deActivate.classList.remove('deActive');
        }, 500);
        } else {
            logintab.classList.add('deActive');
        }
        loginbtn.classList.add("removed")   
        signoutbtn.classList.remove("removed")   

    }

      const data = await response.json();
      console.log('Login response:', data);

      // Handle successful login (e.g., redirect or show a success message)
      // Example: navigate('/dashboard');

    } catch (error) {
      console.error('Error during login:', error);
      setError("Login failed. Please check your email and password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="Login logframe">
    
      <form onSubmit={handleSubmit}>
      <h2>Log In </h2>
        {error && <p className="logerror">{error}</p>}
        <div onClick={loginAct} className="X">
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="input-item">
        <label htmlFor="email" required>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        </div>
        <div className="input-item">
        <label htmlFor="loginpassword" required>Password</label>
        <input
          type="password"
          name="loginpassword"
          id="loginpassword"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}

export default Login;