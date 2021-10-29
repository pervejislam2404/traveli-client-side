import React from 'react';
import { Table } from 'react-bootstrap';
import logo from './logo.png';

const Footer = () => {
    return (
        <div className="dark-blue">
           <div className="w-75 mx-auto row text-white py-5">
               <div className="col-lg-3 col-6">
                   <h3><img height="40" width="40" src={logo} alt="" /> Traveli</h3>
                   <p>5th flora, 700/D Gulsan road,Dhaka</p>
                   <p>lane Dhaka-1782</p>
                   <p>+10 367 826 2567</p>
                   <p>contact@carpenter.com</p>
               </div>
               <div className="col-lg-3 col-6">
                    <h3>Company</h3>
                    <p>Pricing</p>
                    <p>About</p>
                    <p>Gallery</p>
                    <p>Contact</p>
                    
               </div>
               <div className="col-lg-3 col-6">
                    <h3>Popular destination</h3>
                    <Table className="border-0" responsive="sm">    
                        <tbody className="text-white border-0">
                            <tr style={{border: 'none!important'}} className="border-0">
                                <td>Cox's bazar</td>
                                <td>Sajek velly</td>
                            </tr>
                            <tr className="border-0">
                                <td>Inani lake</td>
                                <td>Ratagul</td>
                            </tr>
                            <tr className="border-0">
                                <td>Mohastanghor</td>
                                <td>Table cell</td>
                            </tr>
                            <tr className="border-0">
                                <td>Sundarban</td>
                                <td>Bandarban</td>
                            </tr>
                        </tbody>
                    </Table>
               </div>
               <div className="col-lg-3 col-6">
                    <h3>Contact</h3>
               </div>
           </div>
        </div>
    );
};

export default Footer;
