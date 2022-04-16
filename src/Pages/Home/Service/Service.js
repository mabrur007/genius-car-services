import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, name, description, price } = service;

    const navigate = useNavigate(id);
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
        console.log(id)
    }

    return (
        <div className='service'>
            <img src={img} alt="img" />
            <h2>Service: {name}</h2>
            <p>Price: <b>${ price}</b></p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: { name}</button>
        </div>
    );
};

export default Service;