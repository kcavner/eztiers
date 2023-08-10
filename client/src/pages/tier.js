import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

function Tier(){
    const [data, setData] = useState([]);

    useEffect(()=>{
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
working
        </div>
    );
}

export default Tier;