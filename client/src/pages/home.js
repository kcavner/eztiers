import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import Auth from '../utils/auth';
import Tier from './tier';




function Home(){
    const [table,setTable] = useState({ tiers: [] })
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
            <div className='tiers-list-container'>
                <div className='tiers-list-card'>
                    {table.tiers.map((item, i) => (
                        <div className='tiers-list'>
                            
                            <Tier key={i} table={item.table} title={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;