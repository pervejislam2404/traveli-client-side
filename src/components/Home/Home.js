import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import mySpinner from './spinner.png'

const Home = () => {
    const [items,setItems] = useState([]) 

    useEffect(() =>{
        axios('http://localhost:5040/places')
        .then(res=> setItems(res.data))
    },[])
    return (
        <div>
           <Banner/>
           <div className="row bg-light">
               <div className="col-1 col-lg-2"></div>
               {items.length?<div className="col-10 col-lg-8 row g-5 py-3">
                        {
                        items.map((service,index)=><Service key={index} service={service}/>)
                        }
               </div>:
              <div className="w-50 text-center">
                   <img src={mySpinner} alt="" />
              </div>
               }
               <div className="col-2 col-lg-2"></div>
           </div>
       
       
         </div>
    );
};

export default Home;