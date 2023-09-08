import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import Auth from '../utils/auth';
import Tier from './tier';




function Home(){
    const [table,setTable] = useState({ tiers: [] })
    const userId = Auth.getUser().data._id
    const [selectedTier, setSelectedTier] = useState(null);

    useEffect(()=>{
        try{
       
        axiosInstance.get(`/api/users/${userId}`)
        .then(response => {
            setTable(response.data)
        })
    } catch(error){
        console.error('error with tiers',error)
    }
    },[])

    const handleTierClick = (tier) => {
        // Set the selectedTier state to the clicked tier
        setSelectedTier(tier);
      };

      const handleBackToHome = () => {
        setSelectedTier(null); // Set selectedTier to null when going back to Home
      };


      return (
        <div>
            
          {selectedTier ? (
            // Render the selected tier if it's not null
            <Tier
              key={selectedTier._id} // Use a unique identifier for the key
              table={selectedTier.table}
              title={selectedTier.title}
              onBackToHome={handleBackToHome}
            />
          ) : (
            // Render the list of tiers if no tier is selected
            <div className='tiers-list-container'>
              <div className='tiers-list-card'>
              {!table.tiers.length ? (<p>Please Create a Tier</p>): 'Tiers'}
                {table.tiers.map((item) => (
                  <div className='tiers-list' key={item._id}>
                   
                    <button className="login-button" onClick={() => handleTierClick(item)}>
                      {item.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

export default Home;