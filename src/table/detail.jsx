import React from 'react';

const Details = ({detailItem}) => {
    const cityAddress = detailItem&&detailItem.address?detailItem.address.streetAddress:null
    const city = detailItem&&detailItem.address?detailItem.address.city:null
    const state = detailItem&&detailItem.address?detailItem.address.state:null
    const zip = detailItem&&detailItem.address?detailItem.address.zip:null
    return (
        <div>
            <div >id: <b>{detailItem.id}</b></div>
            <div>firstName: <b>{detailItem.firstName}</b></div>
            <div>lastName:<b> {detailItem.lastName}</b></div>
            <div>email: <b>{detailItem.email}</b></div>
            <div>phone: <b>{detailItem.phone}</b></div>
            
             <div>address: <b>{cityAddress}</b></div>
            <div>City: <b>{city}</b></div>
            <div>State: <b>{state}</b></div>
            <div>Zip: <b>{zip}</b></div>
            <div>description: <b>{detailItem.description}</b></div>
        </div>
    );
};

export default Details;