import React, { useEffect, useState } from 'react';
import { Card} from 'react-bootstrap';
import axios from 'axios';

const Guide = () => {
    const [guides,setGuides] = useState([])

    useEffect(() => {
     axios('https://tranquil-beyond-59039.herokuapp.com/guides')
     .then(res=> setGuides(res.data))
    },[])
    return (
        <div className="light-blue py-5">
            <div className="row">
                <div className="text-center text-danger py-3"><h2>OUR BEST GUIDES</h2></div>
                <div className="col-12 col-lg-3"></div>
                <div className="col-12 col-lg-6 row">
                   {guides.map((guide,index)=>{return(
                       <div key={index} className="col-lg-4 col-12">
                       <Card className="border-0">
                        <Card.Img height="250" variant="top" src={guide.img} />
                        <Card.Body className="text-center bg-warning">
                            <Card.Title className="text-danger">{guide.name}</Card.Title>
                            <Card.Text>
                            {guide.category.toUpperCase()}
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                      </div>
                   )})}
                </div>
                <div className="col-12 col-lg-3"></div>
            </div>
        </div>
    );
};

export default Guide;