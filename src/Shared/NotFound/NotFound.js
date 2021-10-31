import React from 'react';
import error from './error.png'
import './NotFound.css';


const NotFound = () => {
    return (
        <div className="bg-light">
            <img style={{width: '100%',height: '90vh'}} className="" src={error} alt="" />
        </div>
    );
};

export default NotFound;