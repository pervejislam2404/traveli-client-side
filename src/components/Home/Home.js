import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import mySpinner from './spinner.png'
import Guide from './Guidors/Guide';
import Gallery from './Gallery/Gallery';

const Home = () => {
    const [items,setItems] = useState([]) 
  

    useEffect(() =>{
        axios('https://tranquil-beyond-59039.herokuapp.com/places')
        .then(res=> setItems(res.data))
    },[])
    return (
        <div>
           <Banner/>
           <div className="row bg-light">
               <div className="col-1 col-lg-2"></div>
               {items.length ?<div className="col-10 col-lg-8 row g-5 py-3">
                        {
                        items.map((service,index)=><Service key={index} service={service}/>)
                        }
               </div>:
              <div className="w-50 mx-auto text-center">
                   <img src={mySpinner} alt="" />
              </div>
               }
               <div className="col-2 col-lg-2"></div>
           </div>
         <Guide/>
         <Gallery/>
       
         </div>
    );
};

export default Home;