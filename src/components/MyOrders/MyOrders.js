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
        })
    },[user.email])
    
    const handleDelete =(id)=>{
        const checker = window.confirm('Are you sure delete?')
      if(checker){ console.log(id);
        axios.delete(`https://tranquil-beyond-59039.herokuapp.com/delete/${id}`)
        .then(res=>{
          if(res.data.acknowledged){
              alert('delete successful')
              const rest = added.filter(it=> it._id !== id);
              setAdded(rest)
          };
        })}
    }
    


   
    // console.log(added,user.email);
    return (
        <div>
           <div className="container mx-auto bg-light row py-5">
               {added?.map((item,index)=> {return(
                   <div key={index} className="col-12 col-lg-4">
                            <Card>
                            <Card.Img height="250"variant="top" src={item?.img} />
                            <Card.Body>
                                <Card.Title>{item?.title}</Card.Title>
                                <Card.Text>
                               {item?.description}
                                </Card.Text>
                                <Button onClick={()=>handleDelete(item._id)} variant="danger text-white">Delete</Button>
                            </Card.Body>
                            </Card>
                   </div>
               )})}
           </div>
        </div>
    );
};

export default MyOrders;