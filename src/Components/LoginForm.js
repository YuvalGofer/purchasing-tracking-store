import React, { useState } from 'react'
import axios from 'axios';

function LoginForm({ login, error }) {
    const submitHandler = e => {
        e.preventDefault();
        console.log(e);
        const userEmail = e.target[0].value;
        console.log(userEmail);
        const userPassword = e.target[1].value;
        console.log(userPassword);
        axios
            .get("./Users.json")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        // login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                {/* <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div> */}
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm


