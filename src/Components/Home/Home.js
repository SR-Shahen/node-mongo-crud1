import React, { useEffect, useState } from 'react';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4>this is homepage:{services.length}</h4>
            {
                services.map(service => <p key={service._id}>Name: {service.name} :: price: {service.price}</p>)
            }
        </div>
    );
};

export default Home;