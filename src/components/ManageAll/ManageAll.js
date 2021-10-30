import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageAll.css';
import { Card,Button } from 'react-bootstrap';

const ManageAll = () => {
    const [allUser,setAllUser] =useState([]);
    const [checker,setChecker] = useState(false);
    // const [val,setVal] = useState('')

    useEffect(() =>{
        axios('https://tranquil-beyond-59039.herokuapp.com/allAddedService')
        .then(result=> setAllUser(result.data))
    },[checker])


    const handleApproved=(id) => {
        const updateUser = {status: 'Approved'}
        axios.put(`https://tranquil-beyond-59039.herokuapp.com/updateUser/${id}`,updateUser)
        .then(response=> {
            if(response.data){
                console.log(response.data);
                setChecker(true)
            }
        })
     
    }

    const handleDelete=(id) => {
        const checker = window.confirm('Are you sure delete?')
      if(checker){
        axios.delete(`https://tranquil-beyond-59039.herokuapp.com/deleteOne/${id}`)
        .then(res=>{
          if(res.data.acknowledged){
              alert('delete successful')
              const rest =allUser.filter(it=> it._id !== id);
              setAllUser(rest)
          };
        })}
    }
    return (
        <div>
            <div className="container mx-auto bg-light row my-5 py-4 g-4">
               {allUser.map((service,index)=>{return(
                   <div key={index} className="col-3">
                        <Card className="border-0 cart">
                        <Card.Img variant="top" height="150" src={service?.img} />
                        <Card.Body>
                            <Card.Title className="fs-4 py-2">{service?.title}</Card.Title>
                            <Card.Title><span className="dark-blue text-white px-3 rounded fw-bold py-1">{service?.price}</span></Card.Title>
                            <Card.Text>{service?.place}</Card.Text>
                            <Card.Text>{service?.location}</Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                            <Button onClick={()=>handleApproved(service?._id)}  variant="danger text-white">{service?.status}</Button>
                            <Button onClick={()=>handleDelete(service?._id)} variant="warning text-primary">Delete</Button>
                            </div>
                        </Card.Body>
                        </Card>
                   </div>
               )})}
            </div>
        </div>
    );
};

export default ManageAll;