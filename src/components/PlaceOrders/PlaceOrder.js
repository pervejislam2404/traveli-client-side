import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import UseAuth from '../../Context/UseAuth';
import swal from 'sweetalert';

const PlaceOrder = () => {
    const { register, handleSubmit,reset } = useForm();
    const [service,setService] = useState({})
    const {id} = useParams();
    const {user} = UseAuth()


    useEffect(()=>{
        axios(`https://tranquil-beyond-59039.herokuapp.com/service/${id}`)
        .then(res=>{
            setService(res.data)
            reset(res.data)
           
        })
    },[id,reset])

    
    const onSubmit = data => {
        // current-date-picker

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;       
       
        delete data._id;


        data.booked=today;      
        data.status= 'pending'
     

       axios.post(`https://tranquil-beyond-59039.herokuapp.com/addedService`,data)
       .then(res=>{
           if(res.data){
            swal({
                title: "Added successful!",                    
                icon: "success",
              });
             
           }
       })
     };
   
    
    return (
        <div>
            <div className="w-75 mx-auto bg-light p-5">
            <Card className="border-none shadow-lg">
            <div className="row">
                <div className="col-12 col-lg-5">
                <Card.Img style={{height: '100%!important'}} className="img-fluid" variant="top" src={service?.img} />
                </div>
                <div className="col-12 col-lg-7">
                    {/* service-information */}

                    <Card.Body className="">
                        <Card.Title>{service?.title}</Card.Title>
                        <Card.Title>{service?.place}</Card.Title>
                        <Card.Text>{service?.location}</Card.Text>
                        <Card.Text className="fw-light">
                        {service?.description}
                        </Card.Text>
                        <div className="d-lg-flex justify-content-between align-items-center">
                               <h5 className="dark-blue px-3 p-1 text-white rounded">{service?.price}</h5>
                               <h4 className="dark-blue px-3 p-1 text-white rounded">Review({service?.rate})</h4>
                               <h5 className="dark-blue px-3 p-1 text-white rounded">{service?.duration}</h5>
                        </div>
                    </Card.Body>
                </div>
            </div>
             </Card>
            </div>

            <div className="w-75 mx-auto bg-light pb-5">
               <div className="row">
                   <div className="col-lg-4 col-12"></div>
                   <div className="col-lg-4 col-12">
                        <form className="d-flex flex-column border p-3 bg-white" onSubmit={handleSubmit(onSubmit)}>

                              <input className="my-2 p-2" {...register("email",{ required: true })} defaultValue={user?.email} placeholder="Email"/>
                             <input className="my-2 p-2" {...register("name",{ required: true })} defaultValue={user?.displayName} placeholder="Name"/>

                            <input className="my-2 p-2" {...register("rate")} defaultValue={service?.rate} placeholder="Rating"/>

                            <input className="my-2 p-2" {...register("title")} defaultValue={service?.title} placeholder="Title"/>

                            <input className="my-2 p-2" {...register("place")} defaultValue={service?.place} placeholder="Place"/>

                            <input className="my-2 p-2" {...register("duration")} defaultValue={service?.duration} placeholder="Duration"/>

                            <input className="my-2 p-2" {...register("location")} defaultValue={service?.location} placeholder="Location" disabled/>

                            <input className="my-2 p-2" {...register("description")} defaultValue={service?.description} placeholder="Description"/>

                            <input className="my-2 p-2" type="text" {...register("price")} defaultValue={service?.price} />

                            <input className="my-2 p-2 bg-danger text-white border-0" type="submit"/>
                        </form>
                   </div>
                   <div className="col-lg-4 col-12"></div>
               </div>
            </div>
        </div>
    );
};

export default PlaceOrder;