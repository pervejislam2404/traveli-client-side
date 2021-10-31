import React from 'react';
import './Service.css';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({service}) => {
    const history = useHistory()
    const {img,location,price,rate,description,duration,place,title} = service;

    const handleClick = (id) =>{
       history.push(`/placeOrder/${id}`)
    }
    return (
        <div className="col-12 col-lg-4">
            <Card className="border-0 cart">
            <div className="hero-section p-2">
              <Card.Img height="250" variant="top" src={img} />
              <h1 className="hero-item rounded">{price}৳</h1>
            </div>
            <Card.Body>
                <Card.Title className="text-danger fs-4">{title}</Card.Title>
                <Card.Title className="fs-5">{place}</Card.Title>
                <Card.Text>{location}</Card.Text>
                <Card.Text className="text-muted">
               {description.slice(0,60)+'...'}
                </Card.Text>
                <h5>Review({rate})</h5>
                <div className="d-flex justify-content-between align-items-center">
                <Button onClick={()=>handleClick(service._id)} variant="danger" className="px-4 fw-bold">Book</Button>
                <span className="fs-5 dark-blue text-white p-2 px-3 rounded">{duration}</span>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Service;