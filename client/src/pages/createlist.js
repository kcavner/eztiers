import React, { useState } from 'react'

export default function CreateList(){
    const [gameText, setGameText] = useState('');
    const [table, setTable] = useState([]);
    const [sTier, setSTier] = useState([]);
    const [aTier, setATier] = useState([]);
    const [bTier, setBTier] = useState([]);
    const [cTier, setCTier] = useState([]);
    const [dTier, setDTier] = useState([]);

    
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
            <form>
                <input
                type="text"
                value={gameText}
                onChange={(e) => {setGameText(e.target.value)}}
                ></input>
            </form>
            <div className="sTier">
                {sTier.map((item, index) => (
                <div key={index}>{item.gameText}
                </div>))}
            </div>
            <div className="aTier">
                {aTier.map((item, index) => (
                <div key={index}>{item.gameText}
                </div>))}
            </div>
            <div className="bTier">
                {bTier.map((item, index) => (
                <div key={index}>{item.gameText}
                </div>))}
            </div>
            <div className="cTier">
                {cTier.map((item, index) => (
                <div key={index}>{item.gameText}
                </div>))}
            </div>

            
            <div className="dTier">
                {dTier.map((item, index) => (
                <div key={index}>{item.gameText}
                </div>))}
            </div>
            <button className="sButton" onClick={()=>{handleTierSelect("S")}}>S</button>
            <button className="aButton" onClick={()=>{handleTierSelect("A")}}>A</button>
            <button className="bButton" onClick={()=>{handleTierSelect("B")}}>B</button>
            <button className="cButton" onClick={()=>{handleTierSelect("C")}}>C</button>
            <button className="dButton" onClick={()=>{handleTierSelect("D")}}>D</button>
        </div>
    )
}