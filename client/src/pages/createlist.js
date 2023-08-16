import React, { useState } from 'react'

export default function CreateList(){
    const [gameText, setGameText] = useState('');
    const [table, setTable] = useState([]);
    const [sTier, setSTier] = useState([{tier:"S",gameText:"S"}]);
    const [aTier, setATier] = useState([{tier:"A",gameText:"A"}]);
    const [bTier, setBTier] = useState([{tier:"B",gameText:"B"}]);
    const [cTier, setCTier] = useState([{tier:"C",gameText:"C"}]);
    const [dTier, setDTier] = useState([{tier:"D",gameText:"D"}]);

    
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
            <div id="tierRow"  className="sTier">
                {sTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            <div id="tierRow"  className="aTier">
                {aTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            <div id="tierRow"  className="bTier">
                {bTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            <div id="tierRow"  className="cTier">
                {cTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            <div id="tierRow" className="dTier">
                {dTier.map((item, index) => (
                <div id='bubble' key={index}>{item.gameText}
                </div>))}
            </div>

            
        </div>
    )
}