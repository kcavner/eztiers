import React from 'react';


const Tier = ({ table }) => {
  return (
    <div>
       {table.map((item, index) => (
        <div key={index}>
          <p>Tier: {item.tier}</p>
          <p>Game: {item.gameText}</p>
        </div>
      ))}
    </div>
  );
};

export default Tier;