import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../../Context/UseAuth';
import { Card,Button } from 'react-bootstrap';
import swal from 'sweetalert';

const MyOrders = () => {
    const [added,setAdded] = useState([]);
    const {user} = UseAuth()
 
    useEffect(() =>{
      axios(`https://tranquil-beyond-59039.herokuapp.com/added/${user.email}`)
        .then(res=>{
            setAdded(res.data)
           
        })
    },[user.email])
    
    const handleDelete =(id)=>{
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
              const rest = added.filter(it=> it._id !== id);
              setAdded(rest)               
            }
        })
       } else {
          swal("Your imaginary file is safe!");
        }
      });


    }  


   
  
    return (
        <div>
           <div className="container mx-auto bg-light row py-5 g-4">
               {added?.map((item,index)=> {return(
                   <div key={index} className="col-12 col-lg-4">
                            <Card className="border-0 shadow-lg">
                            <Card.Img className="" height="250" variant="top" src={item?.img} />
                            <Card.Body>
                                <Card.Title className="text-danger fs-4">{item?.title}</Card.Title>
                                <Card.Title className="text-danger">{item?.place}</Card.Title>

                                <Card.Text className="fw-light text-muted">
                                  {item?.description}
                                </Card.Text>

                                <Button className="text-primary my-2 fw-bold" variant="light">booked in {item?.booked}</Button>

                                <Card.Text className="fw-bold">{item?.email}</Card.Text>
                                <Card.Text className="fw-bold text-danger">{item?.name}</Card.Text>
                                <h5 className="">Review({item?.rate})</h5>

                                <div className="d-flex justify-content-between my-2">
                                      <h5 className="dark-blue px-2 p-1 text-white rounded">{item?.price}</h5>
                                      <h5 className="dark-blue px-3 p-1 text-white rounded">{item?.duration}</h5>                                    
                                      <Button onClick={()=>handleDelete(item._id)} variant="danger text-white ">Delete</Button>
                                </div>
                                <h5 className={`${item.status==="pending"? 'bg-warning text-primary': 'bg-danger text-lite'} px-3 p-2 rounded text-center`}>{item?.status}</h5>
                            </Card.Body>
                            </Card>
                   </div>
               )})}
           </div>
        </div>
    );
};

export default MyOrders;