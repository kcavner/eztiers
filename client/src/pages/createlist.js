import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function CreateList(){
    const [gameText, setGameText] = useState('');
    const [table, setTable] = useState([]);
    const [sTier, setSTier] = useState([]);
    const [aTier, setATier] = useState([]);
    const [bTier, setBTier] = useState([]);
    const [cTier, setCTier] = useState([]);
    const [dTier, setDTier] = useState([]);

    const [isToggled, setIsToggled] = useState(true);

    const handleClick = () => {
      setIsToggled(!isToggled);
    };

    const handleTableSubmit = (e) => {
        e.preventDefault()

    }

    const handleTierSelect = (tier) => {
        table.push({
          tier: tier,
          gameText: gameText
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
        <div>
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
                {sTier.map((item, index) => (
                <div id={isToggled? 'bubble' : 'bubble-hidden'} key={index} onClick={handleClick}>
                  {isToggled? item.gameText :<FontAwesomeIcon icon={faEye} className="fa-eye"/>}
                </div>))}
            </div>

            <div id="tierRow"  className="aTier">
            <div id="bubble-letter">A</div>
                {aTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            <div id="tierRow"  className="bTier">
            <div id="bubble-letter">B</div>
                {bTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            <div id="tierRow"  className="cTier">
            <div id="bubble-letter">C</div>
                {cTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            <div id="tierRow" className="dTier">
            <div id="bubble-letter">D</div>
                {dTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>
            </div>

            
        </div>
    )
}