import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';
import UseAuth from '../../Context/UseAuth';

const NewService = () => {
    const { register, handleSubmit,reset } = useForm();
    const {user} = UseAuth()


    const onSubmit = data => {
        console.log(data);
        axios.post('https://tranquil-beyond-59039.herokuapp.com/newUser',data)
        .then((response) => {
            if(response.data){
                swal({
                    title: "Added successful!",                   
                    icon: "success",
                    button: "Aww yiss!",
                  });
                reset()
            }
        })

    }
    return (
        <div>
             <div className="w-75 mx-auto bg-light py-5">
               <div className="row">
                   <div className="col-lg-4 col-12"></div>
                   <div className="col-lg-4 col-12">

                       {/* new-service-adding-form */}

                        <form className="d-flex flex-column border p-3 bg-white" onSubmit={handleSubmit(onSubmit)}>
                            <input className="my-2 p-2" {...register("email",{ required: true })} defaultValue={user.email} placeholder="Email"/>

                            <input className="my-2 p-2" {...register("rate",{ required: true })} placeholder="Rating"/>

                            <input className="my-2 p-2" {...register("title",{ required: true })} placeholder="Title"/>

                            <input className="my-2 p-2" {...register("place",{ required: true })} placeholder="Place"/>

                            <input className="my-2 p-2" {...register("duration",{ required: true })} placeholder="Duration"/>

                            <input className="my-2 p-2" {...register("location",{ required: true })} placeholder="Location" defaultValue="Bangladesh"/>

                            <input className="my-2 p-2" {...register("rate",{ required: true })} placeholder="Rating"/>

                            <input className="my-2 p-2" {...register("img",{ required: true })} placeholder="Photo link"/>

                            <input className="my-2 p-2" {...register("description",{ required: true })} placeholder="Description"/>

                            <input className="my-2 p-2" type="text" {...register("price",{ required: true })} placeholder="price"/>

                            <input className="my-2 p-2 bg-danger text-white border-0" type="submit" />
                        </form>
                   </div>
                   <div className="col-lg-4 col-12"></div>
               </div>
            </div>
        </div>
    );
};

export default NewService;