import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, description, price } = service;

    return (
        <div className='service'>
            <img src={img} alt="img" />
            <h2>Service: {name}</h2>
            <p>Price: <b>${ price}</b></p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book: { name}</button>
        </div>
    );
};

export default Service;