import React from 'react';

import bannerThree from './banner-three.jpg'
import bannerFour from './banner-four.jpg'
import bannerFive from './banner-five.jpg'

const Gallery = () => {
    return (
        <div className="dark-blue p-5">
            <div className="container">
                <div className="row g-3">
                    <div className="col-12 col-lg-4">
                        <div className="p-3 bg-light">
                           <img className="img-fluid rounded rounded" src={bannerFive} alt="" />
                        </div>                         
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className=" p-3 bg-light rounded">
                           <img className="img-fluid rounded" src={bannerFour} alt="" />
                        </div>
                         
                    </div>
                    
                    <div className="col-12 col-lg-4 ">
                        <div className="p-3 bg-light rounded">
                           <img className="img-fluid rounded" src={bannerThree} alt="" />
                        </div>
                          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;