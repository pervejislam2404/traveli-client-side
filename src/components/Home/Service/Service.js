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
            <div className="hero-section">
              <Card.Img height="250" variant="top" src={img} />
              <h1 className="hero-item rounded">{price}৳</h1>
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
               {description.slice(0,20)}
                </Card.Text>
                <Button onClick={()=>handleClick(service._id)} variant="danger" className="px-4 fw-bold">Add</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Service;