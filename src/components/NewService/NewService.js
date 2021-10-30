import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';

const NewService = () => {
    const { register, handleSubmit,reset } = useForm();


    const onSubmit = data => {
        // console.log(data);
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
                        <form className="d-flex flex-column border p-3 bg-white" onSubmit={handleSubmit(onSubmit)}>
                            <input className="my-2 p-2" {...register("email")} placeholder="Email"/>
                            <input className="my-2 p-2" {...register("rate")} placeholder="Rating"/>
                            <input className="my-2 p-2" {...register("title")} placeholder="Title"/>
                            <input className="my-2 p-2" {...register("place")} placeholder="Place"/>
                            <input className="my-2 p-2" {...register("duration")} placeholder="Duration"/>
                            <input className="my-2 p-2" {...register("location")} placeholder="Location"/>
                            <input className="my-2 p-2" {...register("rate")} placeholder="Rating"/>
                            <input className="my-2 p-2" {...register("img")} placeholder="Photo link"/>
                            <input className="my-2 p-2" {...register("description")} placeholder="Description"/>
                            <input className="my-2 p-2" type="text" {...register("price")} placeholder="price"/>
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