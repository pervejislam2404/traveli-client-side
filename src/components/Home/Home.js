import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from './Banner/Banner';

const Home = () => {
    const [items,setItems] = useState([]) 

    useEffect(() =>{
        axios('http://localhost:5040/places')
        .then(res=> setItems(res.data))
    },[])
    return (
        <div>
           <Banner/>
       
        {
            items.map(it=><h1>{it.location}</h1>)
        }
         </div>
    );
};

export default Home;