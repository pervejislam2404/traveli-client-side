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
               {items.length ?<div className="col-10 col-lg-8 row g-5 mx-auto pb-4">
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

         <div className="container mx-auto g-5">
            <div className="row py-5 g-4">
                <div className="col-lg-4 col-12 text-center">
                     <div className=" p-5 bg-light shadow-lg">
                     <h1><i class="fas fa-thumbs-up text-danger"></i></h1>
                     <h3>Free cancellation</h3>
                      <p>Don't stress if your plans change. Cancel up to 24 hours before your activity starts for a full refund.</p>
                     </div>
                </div>
                <div className="col-lg-4 col-12 text-center">
                      <div className= "p-5 bg-light shadow-lg">
                          <h1><i class="fas fa-clock text-danger"></i></h1>
                      <h3>Faster access</h3>  
                      <p>Skip the long ticket lines and get straight to the good stuff in the places everyone wants to visit.</p>
                      </div>
                </div>
                <div className="col-lg-4 col-12 text-center">
                     <div className=" p-5 bg-light shadow-lg">
                    <h1><i class="fas fa-heart text-danger"></i></h1>
                     <h3>Friendly help</h3>
                      <p>We're standing by 24/7 to make your experience incredible. Reach us by phone, email, or WhatsApp.</p>
                     </div>
                </div>
            </div>
         </div>
       
       <div className="bg-info">
          <div className="container row mx-auto g-4 py-5">
             <div className="col-12 col-lg-3">
                <div className="text-center px-4 py-3 dark-blue text-light rounded">
                    <h1 className="fw-bold large-font">10k+</h1>
                    <p className="fs-5">Professional Tour Guide</p>
                </div>
             </div>

             <div className="col-12 col-lg-3">
                <div className="text-center px-4 py-3 dark-blue text-light rounded">
                    <h1 className="fw-bold large-font">40k+</h1>
                    <p className="fs-5">Tours Are Complicated</p>
                </div>
             </div>

             <div className="col-12 col-lg-3">
                <div className="text-center px-4 py-3 dark-blue text-light rounded">
                    <h1 className="fw-bold large-font">12k+</h1>
                    <p className="fs-5">Travelling Experience</p>
                </div>
             </div>

             <div className="col-12 col-lg-3">
                <div className="text-center px-4 py-3 dark-blue text-light rounded">
                    <h1 className="fw-bold large-font">60k</h1>
                    <p className="fs-5">Happy Customers</p>
                </div>
             </div>
             
          </div>
       </div>


         </div>
    );
};

export default Home;