import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import Auth from "../utils/auth";
import Tier from "./tier";
import axios from "axios";

function Home() {
  const [table, setTable] = useState({ tiers: [] });
  const [deletedTier, setDeletedTier] = useState([])
  const userId = Auth.getUser().data._id;
  const [selectedTier, setSelectedTier] = useState(null);

  useEffect(() => {
    try {
      axiosInstance.get(`/api/users/${userId}`).then((response) => {
        setTable(response.data);
      });
    } catch (error) {
      console.error("error with tiers", error);
    }
  }, []);

  const handleTierClick = (tier) => {
    setSelectedTier(tier);
  };

  const handleBackToHome = () => {
    setSelectedTier(null); 
  };

  const handleDelete = (title) => {
    const titleJson = {
      title: title
    }
    try {
      axiosInstance.put(`/api/users/delete/${userId}`, titleJson).then((response) => {
        setDeletedTier(response.data)
        console.log(deletedTier)
      })
    }catch (error) {
      console.error("error with delete", error);
    }
  };

  return (
    <div>
      {selectedTier ? (
       
        <Tier
          key={selectedTier._id} 
          table={selectedTier.table}
          title={selectedTier.title}
          onBackToHome={handleBackToHome}
        />
      ) : (
        <div className="tiers-list-container">
          <div className="tiers-list-card">
            {!table.tiers.length ? <p>Please Create a Tier</p> : "Tiers"}
            {table.tiers.map((item) => (
              <div className="tiers-list" key={item._id}>
                <button
                  className="login-button"
                  onClick={() => handleTierClick(item)}
                >
                  {item.title}
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.title)}
                >
                  delete
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
