import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Auth from '../utils/auth'
import Tier from './tier'




function Home(){
    const [table,setTable] = useState()
    const userId = Auth.getUser().data._id

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


    return(
        <div>
            {table.tiers.map((item, i) => (
                <Tier key={i} table={item.table} />
                ))}

        </div>
    );
}

export default Home;