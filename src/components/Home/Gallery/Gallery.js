import React from 'react';
import bannerOne from './banner-one.jpg'
import bannerTwo from './banner-two.jpg'
import bannerThree from './banner-three.jpg'
import bannerFour from './banner-four.jpg'
import bannerFive from './banner-five.jpg'

const Gallery = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 p-3 ">
                          <img className="img-fluid rounded" src={bannerOne} alt="" />
                    </div>
                    <div className="col-7 p-3">
                          <img className="img-fluid rounded" src={bannerTwo} alt="" />
                    </div>
                    <div className="col-5 p-3 row">
                        <img className="img-fluid rounded col-12" src={bannerThree} alt="" />
                        <img className="img-fluid rounded col-112" src={bannerFour} alt="" />
                    </div>
                    {/* <div className="col-6 p-3">
                        
                    </div> */}
                    <div className="col-6 p-3">
                             <img className="img-fluid rounded" src={bannerFive} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;