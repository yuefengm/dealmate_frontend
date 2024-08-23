import './App.scss';
import {Route, Routes} from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './components/Home';
import Learn from './components/Learn';
import Explore from './components/Explore';
import CreatAcc from './components/CreateAcc';
import SearchAddress from './components/searchAddress';
function App() {
  const handleExploreSubmit = (inputValue) => {
    console.log('Submitted address:', inputValue);       
    // Add your submission logic here
  };


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";

    script.onload = () => {
      try{
      window.voiceflow.chat.load({
        verify: { projectID: '66bc0762483c6193a6c3c7ea' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: '66bc0762483c6193a6c3c7eb',
        authToken: 'VF.DM.66bc2aa8adfea22165673095.KPuTvq6xaCkbpjkC',
        render: {
          mode: 'overlay'
          // target: document.getElementById('flat-chat') // Targeting the element with ID 'flat-chat'
        },
        autostart: false 
      });
    } catch (error) {
      console.log("Error loading voiceflow chat", error);
    }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(script);
    };
  }, []); 

    // Function to open the chat
  const openChat = () => {
    if (window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.open();
    } else {
      console.error("Voiceflow chat is not loaded yet.");
    }
  };

  const chatButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'transparent', // No background for the button itself, just the image
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };
  
  // Style for the chat icon image
  const chatIconStyle = {
    width: '60px',  // Adjust size as needed
    height: '60px', // Adjust size as needed
    borderRadius: '50%', // Make the image circular
  };

  return (
      <>
        {/* Chat trigger button */}
        <button onClick={openChat} style={chatButtonStyle}>
        {/* <img src={chatIcon} alt="Chat" style={chatIconStyle} /> */}
        </button>        
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/learn" element={<Learn/>} />
          <Route path="/explore" element={<Explore onSubmit={handleExploreSubmit}/>} />
          <Route path="/search-address" element={<SearchAddress/>} />
          <Route path="/create-account" element={<CreatAcc/>} />
          {/* Add more routes as needed */}
        </Routes>
      </>
    
  );
}

export default App;
