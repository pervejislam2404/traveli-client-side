import React from 'react';
import { Carousel } from 'react-bootstrap';
import coxs from './coxs-bazar.jpg';
import sazekImg from './sazek.jpg';
import jaflongImg from './jaflong.jpg'; 

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    height="700"
                    className="d-block w-100"
                    src={coxs}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    height="700"
                    className="d-block w-100"
                    src={sazekImg}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="700"
                    className="d-block w-100"
                    src={jaflongImg}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;