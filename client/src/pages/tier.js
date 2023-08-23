import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Auth from '../utils/auth'



function Tier(){
    const [table,setTable] = useState()
    const userId = Auth.getUser().data._id

    useEffect(()=>{
        try{
            console.log('id',userId)
        axiosInstance.get(`/api/users/${userId}`)
        .then(response => {
            setTable(response.data)
        }).then(console.log(table))
    } catch(error){
        console.error('error with tiers',error)
    }
    },[])
    return(
        <div>

        </div>
    );
}

export default Tier;