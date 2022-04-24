import React, { useEffect, useState } from 'react';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handelRemoveService = id => {
        const process = window.confirm("Are you sure Want to delete");
        if (process) {
            console.log("deleate", id);

            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);

                })
        }

    }
    return (
        <div>
            <h4>this is homepage:{services.length}</h4>
            {
                services.map(service => <p key={service._id}>Name: {service.name} :: price: {service.price} <button onClick={() => handelRemoveService(service._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Home;