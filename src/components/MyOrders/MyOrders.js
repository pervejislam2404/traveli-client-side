import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../../Context/UseAuth';
import { Card,Button } from 'react-bootstrap';

const MyOrders = () => {
    const [added,setAdded] = useState([]);
    const {user} = UseAuth()
    // const userEmail = user.email;
    
    useEffect(() =>{
      axios(`https://tranquil-beyond-59039.herokuapp.com/added/${user.email}`)
        .then(res=>{
            setAdded(res.data)
            // console.log(res.data);
        })
    },[user.email])
    
    const handleDelete =(id)=>{
        const checker = window.confirm('Are you sure delete?')
      if(checker){ 
        axios.delete(`https://tranquil-beyond-59039.herokuapp.com/deleteOne/${id}`)
        .then(res=>{
          if(res.data){
              console.log(res.data);
              alert('delete successful')
              const rest = added.filter(it=> it._id !== id);
              setAdded(rest)
          };
          console.log(typeof(id));
        })}
    }
    


   
    // console.log(added,user.email);
    return (
        <div>
           <div className="container mx-auto bg-light row py-5 g-4">
               {added?.map((item,index)=> {return(
                   <div key={index} className="col-12 col-lg-4">
                            <Card className="border-0 shadow-lg">
                            <Card.Img height="250"variant="top" src={item?.img} />
                            <Card.Body>
                                <Card.Title className="text-danger fs-4">{item?.title}</Card.Title>
                                <Card.Title className="text-danger">{item?.place}</Card.Title>
                                <Card.Text className="fw-light">
                                  {item?.description}
                                </Card.Text>
                                <Button onClick={()=>handleDelete(item._id)} variant="danger text-white my-3">Delete</Button>
                                <div className="d-flex justify-content-between">
                                    <h5 className="dark-blue px-2 text-white rounded">{item?.price}</h5>
                                    <h5 className="dark-blue px-3 p-1 text-white rounded">{item?.duration}</h5>
                                    <h5 className="">Review({item?.rate})</h5>
                                </div>
                                <h5 className="bg-warning text-center px-3 p-2 text-white rounded">{item?.status}</h5>
                            </Card.Body>
                            </Card>
                   </div>
               )})}
           </div>
        </div>
    );
};

export default MyOrders;