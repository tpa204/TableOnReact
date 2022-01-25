import React from 'react';

const Details = ({detailItem}) => {
    const cityAddress = detailItem&&detailItem.address?detailItem.address.streetAddress:null
    const city = detailItem&&detailItem.address?detailItem.address.city:null
    return (
        <div>
            <div >id: {detailItem.id}</div>
            <div>firstName: {detailItem.firstName}</div>
            <div>lastName: {detailItem.lastName}</div>
            <div>email: {detailItem.email}</div>
            <div>phone: {detailItem.phone}</div>
            
             <div>address: <b>{cityAddress}</b></div>
            <div>City: <b>{city}</b></div>
            
            <div>description: {detailItem.description}</div>
        </div>
    );
};

export default Details;