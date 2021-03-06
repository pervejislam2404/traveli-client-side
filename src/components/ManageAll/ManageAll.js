import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageAll.css';
import { Card,Button } from 'react-bootstrap';
import swal from 'sweetalert';



const ManageAll = () => {
    const [allUser,setAllUser] =useState([]);
    const [checker,setChecker] = useState(false);
    

    useEffect(() =>{
        axios('https://tranquil-beyond-59039.herokuapp.com/allAddedService')
        .then(result=> setAllUser(result.data))
    },[checker])


    const handleApproved=(id) => {
        const updateUser = {status: 'Approved'}
        axios.put(`https://tranquil-beyond-59039.herokuapp.com/updateUser/${id}`,updateUser)
        .then(response=> {
            if(response.data.modifiedCount){                
                setChecker(true)
                swal({
                    title: "Approved!",                    
                    icon: "success",
                  });
            }else{
                swal({
                    title: "Faild! please try again",                    
                    icon: "warning",
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

            {/* all-added-service */}
            
            <div className="container mx-auto lighter-bg row my-5 py-4 g-4">
               {allUser.map((service,index)=>{return(
                   <div key={index} className="col-12 col-lg-4">
                        <Card className="border-0 cart p-2">
                        <Card.Img variant="top" height="200" src={service?.img} />
                        <Card.Body>
                            <Card.Title className="fs-4 py-2 fw-bold text-danger">{service?.title}</Card.Title>
                            <Card.Title><span className="dark-blue text-white px-3 rounded fw-bold py-1">price {service?.price}</span></Card.Title>

                            <Card.Title className="fs-4 py-2 fw-bold text-primary">{service?.duration}</Card.Title>

                            <Card.Text className="fw-bold">{service?.place}</Card.Text>

                            <Card.Text className="">{service?.location}</Card.Text>

                            <Card.Text className="fw-bold text-danger">{service?.name}</Card.Text>

                            <Card.Text className="fw-light dark-blue rounded p-2 text-light">{service?.email}</Card.Text>

                            <Button className="text-primary my-2 fw-bold" variant="light">booked in {service?.booked}</Button>
                            <div className="d-lg-flex justify-content-between align-items-center">

                                <Button className={`${service.status==="pending"? 'bg-info text-primary': 'bg-danger text-primary'} px-3 p-2 rounded text-center border-0`} onClick={()=>handleApproved(service?._id)}  variant="danger text-white">{service?.status}</Button>
                            
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