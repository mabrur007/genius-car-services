import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;

    return (
        <div>
            <img src={img} alt="img" />
            <h2>Service: {name}</h2>
            <p>{ description}</p>
        </div>
    );
};

export default Service;