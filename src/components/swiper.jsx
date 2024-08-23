import React, { useEffect, useState } from "react";
import '../App.scss';
import propPic from "./assets/house.png"

function Swiper() {
    const [property, setProperties] = useState([]);

    useEffect(() => {
      // Define a function to fetch property data from the API
      const fetchProperties = async () => {
        try {
          const response = await fetch('https://localhost:3001/propertyinfo'); // Assuming your API runs on localhost:3001
          if (!response.ok) {
            throw new Error('Failed to fetch properties');
          }
          const propertyData = await response.json();
          setProperties(propertyData); // Update the state with the received property data
        } catch (error) {
          console.error('Error fetching properties:', error);
        }
      };
  
      fetchProperties(); // Call the fetchProperties function when the component mounts
    }, []); // Empty dependency array ensures useEffect runs only once when the component mounts
  
    const handleLikeClick = async () => {
        try {
          // Trigger the backend function for like action
          console.log('Triggering likedMod function...');
          const response = await fetch('https://localhost:3001/propertyinfo/like', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}), // No need to send any data from the frontend
          });
      
          if (!response.ok) {
            throw new Error('Failed to update data');
          }
      
          // Fetch the updated property info
          const propertyResponse = await fetch('https://localhost:3001/propertyinfo');
          if (!propertyResponse.ok) {
            throw new Error('Failed to fetch updated property info');
          }
          const propertyData = await propertyResponse.json();
          setProperties(propertyData);
      
          // Handle success
          console.log('Data updated successfully');
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      };
      
      const handleDisLikeClick = async () => {
        try {
          // Trigger the backend function for dislike action
          console.log('Triggering dislikedMod function...');
          const response = await fetch('https://localhost:3001/propertyinfo/dislike', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}), // No need to send any data from the frontend
          });
      
          if (!response.ok) {
            throw new Error('Failed to update data');
          }
      
          // Fetch the updated property info
          const propertyResponse = await fetch('https://localhost:3001/propertyinfo/propertyinfo');
          if (!propertyResponse.ok) {
            throw new Error('Failed to fetch updated property info');
          }
          const propertyData = await propertyResponse.json();
          setProperties(propertyData);
      
          // Handle success
          console.log('Data updated successfully');
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      };

  return(
    <div className="Swiper-Main">
      <div className="prop-container">
        <img src="" className="dm-logo" alt="" />
        <img src={propPic} className="prop-pictures" alt="" />
        <div className="info-section">
        {property && (
              <>
          <h4 className="prop-location">{property.address}</h4>
          <h4 className="prop-price">{property.saleP}</h4>
          <div className="sub-info">
            <p className="prop-status">vacant</p>
            <div className="prop-brief-details">
              <p className="bed-bath">Bed {property.bedrooms} Bath {property.bathrooms} SqFt {property.sqft}</p>
              <p className="ARV"> ARV $300,000</p>
              <p className="suggested-method">Creative Finance</p>
            </div>
          </div>
          </>
        )}
        </div>
        <button onClick={handleLikeClick} className="like-button">
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <button onClick={handleDisLikeClick} className="dislike-button">
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </div>
  )
}

export default Swiper;