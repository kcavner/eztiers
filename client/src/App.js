import React,{useState} from 'react';
import Tier from './pages/tier'
import Register from './pages/register'

const App = () => {
const [route,setRoute] = useState(['tier'])

const handleClick = (componentName)=>{
  setRoute(componentName);
}
  return (
 
   <div>
     <button onClick={() => handleClick('Register')}>Register</button>
      <button onClick={() => handleClick('Tier')}>Show tiers</button>

      {route === 'Register' && <Register />}
      {route === 'Tier' && <Tier />}
   </div>
          
    
  
  );
};

export default App
