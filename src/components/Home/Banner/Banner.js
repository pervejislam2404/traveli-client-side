import React from 'react';
import banner from './top-banner.jpg'
import './Banner.css'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <div className="overflow-hidden banner" style={{height:'60vh'}}>
                <img src={banner} alt="" />
                <div className="banner-item">
                    <div className="rounded">
                        <div className="text-light rounded my-3 px-4 py-3 light-bg">
                            <h1>Discover what you love.<span className="text-primary">Books</span><br/>experiences all over the Bangladesh</h1>
                        </div>
                        <div className="d-flex justify-content-between p-4 dark-blue rounded">
                            <input className="banner-input ps-2 fw-bold rounded" placeholder="Where are you going?" type="text" />
                            <Button className="ms-3 fw-bold rounded-pill px-4">Search</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;