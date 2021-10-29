import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const PlaceOrder = () => {
    const [service,setService] = useState()
    const {id} = useParams();

    useEffect(()=>{
        axios(`http://localhost:5040/service/${id}`)
        .then(res=>setService(res.data))
    },[])
    return (
        <div>
            <h1>{service?.title}</h1>
        </div>
    );
};

export default PlaceOrder;