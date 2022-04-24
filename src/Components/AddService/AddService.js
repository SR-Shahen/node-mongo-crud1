import React from 'react';

const AddService = () => {

    const handelAddToService = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const service = { name, price, quantity }
        console.log(service);

        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h5>please add Service</h5>
            <form onSubmit={handelAddToService}>
                <input type="text" name="name" id="" placeholder='name' required />
                <br />
                <input type="number" name="price" id="" required />
                <br />
                <input type="number" name="quantity" id="" />
                <br />
                <input type="submit" value="add user" />

            </form>
        </div>
    );
};

export default AddService;