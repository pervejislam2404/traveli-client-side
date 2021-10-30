import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageAll.css';
import { Card,Button } from 'react-bootstrap';
import swal from 'sweetalert';



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
                swal({
                    title: "Approved!",                    
                    icon: "success",
                  });
            }
        })
     
    }

    const handleDelete=(id) => {

        swal({
            title: "Are you sure to delete?",            
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {

            if (willDelete) {
              swal("Ops! File has been deleted!", {
                icon: "success",
              });
              axios.delete(`https://tranquil-beyond-59039.herokuapp.com/deleteOne/${id}`)
              .then(res=>{
                if(res.data.acknowledged){             
                    const rest =allUser.filter(it=> it._id !== id);
                    setAllUser(rest)                 
                }
            })
           } else {
              swal("Your imaginary file is safe!");
            }
          });
    }


    return (
        <div>
            <div className="container mx-auto bg-light row my-5 py-4 g-4">
               {allUser.map((service,index)=>{return(
                   <div key={index} className="col-3">
                        <Card className="border-0 cart">
                        <Card.Img variant="top" height="150" src={service?.img} />
                        <Card.Body>
                            <Card.Title className="fs-4 py-2 fw-bold text-danger">{service?.title}</Card.Title>
                            <Card.Title><span className="dark-blue text-white px-3 rounded fw-bold py-1">price {service?.price}</span></Card.Title>
                            <Card.Text className="fw-bold">{service?.place}</Card.Text>
                            <Card.Text>{service?.location}</Card.Text>
                            <Card.Text>{service?.email}</Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                            <Button className="" onClick={()=>handleApproved(service?._id)}  variant="danger text-white">{service?.status}</Button>
                            <Button className="text-primary fw-bold" onClick={()=>handleDelete(service?._id)} variant="warning text-primary">Delete</Button>
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