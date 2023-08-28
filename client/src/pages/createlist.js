import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Auth from '../utils/auth'
import axiosInstance from '../utils/axiosInstance';

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

export default function CreateList(){
    const [gameText, setGameText] = useState('');
    const [title, setTitle] = useState('');
    const [table, setTable] = useState([]);
    const [sTier, setSTier] = useState([]);
    const [aTier, setATier] = useState([]);
    const [bTier, setBTier] = useState([]);
    const [cTier, setCTier] = useState([]);
    const [dTier, setDTier] = useState([]);


    const handleTableSubmit = (e) => {
        e.preventDefault()
        const user = Auth.getUser().data._id

        if(table.length){
          try {
            const response = axiosInstance.put(`/api/users/${user}`, {
              title,
              table
            })
            if (response.status === 200) {
              console.log('User array updated successfully');
            }
          } catch (error){
            console.error('error updating user tiers', error)

          }
        } else{alert('table not populated')}
    }


    const handleTierSelect = (tier) => {
        table.push({
          tier: tier,
          gameText: gameText,
          title: title
        });
      
        if (tier === "S") {
          setSTier(prevTiers => [...prevTiers,{ tier: tier, gameText: gameText }]);
        } else if (tier === "A") {
          setATier(prevTiers => [...prevTiers,{ tier: tier, gameText: gameText }]);
        } else if (tier === "B") {
          setBTier(prevTiers => [...prevTiers,{ tier: tier, gameText: gameText }]);
        } else if (tier === "C") {
          setCTier(prevTiers => [...prevTiers,{ tier: tier, gameText: gameText }]);
        } else if (tier === "D") {
          setDTier(prevTiers => [...prevTiers,{ tier: tier, gameText: gameText }]);
        }
      
        setGameText('');
      };

    return(
        <div><div className='entry'>
          rank entry</div>
          <div className='entry'>
            <form>
                <input
                type="text"
                value={gameText}
                onChange={(e) => {setGameText(e.target.value)}}
                ></input>
            </form>
            
            </div>
            <div className='entry'>
            <button id="rankButton" className="sButton" onClick={()=>{handleTierSelect("S")}}>S</button>
            <button id="rankButton" className="aButton" onClick={()=>{handleTierSelect("A")}}>A</button>
            <button id="rankButton" className="bButton" onClick={()=>{handleTierSelect("B")}}>B</button>
            <button id="rankButton" className="cButton" onClick={()=>{handleTierSelect("C")}}>C</button>
            <button id="rankButton" className="dButton" onClick={()=>{handleTierSelect("D")}}>D</button>
            
            </div>
            
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
            <div className='entry'>Tier Title</div>
              <div className='entry'>
            <form>
                <input
                type="text"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                ></input>
            </form>
            </div>
            <div id="save-tier">
              
           <button className='login-button' onClick={handleTableSubmit}>Save Tier</button>
           </div>
            
        </div>
    )
}