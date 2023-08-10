import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

function Tier(){
    const [data, setData] = useState([]);

    useEffect((data)=>{
        axiosInstance.get('/api/users')
        .then(response =>{
            setData(response.data);
            console.log(data)
        })
        .catch(error=>{
            console.error('error matching data', error);
        })
        
    },[]);

    return(
        <div>
           {/* TODO: render bubbles that were created witht the createlist component. */}
working
        </div>
    );
}

export default Tier;