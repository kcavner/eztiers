import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function ToggleBubble({item, index}){
  const [isToggled, setIsToggled] = useState(true);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return(
    <div id={isToggled? 'bubble' : 'bubble-hidden'} key={index} onClick={handleClick}>
    {isToggled? item.gameText : <FontAwesomeIcon icon={faEye} className="fa-eye"/>}
  </div>
  )

}

const Tier = ({ table, title, onBackToHome }) => {
  const [sTier, setSTier] = useState([]);
  const [aTier, setATier] = useState([]);
  const [bTier, setBTier] = useState([]);
  const [cTier, setCTier] = useState([]);
  const [dTier, setDTier] = useState([]);

  // const [isCardExpanded, setIsCardExpanded] = useState(false);

  // const handleClick = () => {
  //   setIsCardExpanded(!isCardExpanded);
  // };

  useEffect(() => {
    console.log("table", table);
    if (table) {
      const updatedSTier = [];
      const updatedATier = [];
      const updatedBTier = [];
      const updatedCTier = [];
      const updatedDTier = [];
  
      table.forEach((item) => {
        switch (item.tier) {
          case "S":
            updatedSTier.push({ tier: item.tier, gameText: item.gameText });
            break;
          case "A":
            updatedATier.push({ tier: item.tier, gameText: item.gameText });
            break;
          case "B":
            updatedBTier.push({ tier: item.tier, gameText: item.gameText });
            break;
          case "C":
            updatedCTier.push({ tier: item.tier, gameText: item.gameText });
            break;
          case "D":
            updatedDTier.push({ tier: item.tier, gameText: item.gameText });
            break;
          default:
            break;
        }
      });
  
      setSTier(updatedSTier);
      setATier(updatedATier);
      setBTier(updatedBTier);
      setCTier(updatedCTier);
      setDTier(updatedDTier);
    }
  }, [table]);
  return (
    <div className='table-card'>
      <div className='table-card-header' >
        <button onClick={onBackToHome}>Back to Tier List</button>
      </div>

      {/* {isCardExpanded && ( */}
      <div id="tier-table">
      <div id="tierRow"  className="sTier">
      <div id="bubble-letter">S</div>
          {sTier.map((item, index) => (<ToggleBubble item={item} index={index}/>
          ))}
      </div>

      <div id="tierRow"  className="aTier">
      <div id="bubble-letter">A</div>
          {aTier.map((item, index) => (
          <ToggleBubble item={item} index={index}/>))}
      </div>

      <div id="tierRow"  className="bTier">
      <div id="bubble-letter">B</div>
          {bTier.map((item, index) => (
          <ToggleBubble item={item} index={index}/>))}
      </div>

      <div id="tierRow"  className="cTier">
      <div id="bubble-letter">C</div>
          {cTier.map((item, index) => (
          <ToggleBubble item={item} index={index}/>))}
      </div>

      <div id="tierRow" className="dTier">
      <div id="bubble-letter">D</div>
          {dTier.map((item, index) => (
          <ToggleBubble item={item} index={index}/>))}
      </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Tier;