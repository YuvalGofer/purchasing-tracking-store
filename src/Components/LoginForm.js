import React, { useState } from 'react'
import axios, { Axios } from 'axios';


function LoginForm({ setUser }) {
    const submitHandler = e => {
        e.preventDefault();
        console.log(e);
        const userEmail = e.target[0].value;
        console.log(userEmail);
        const userPassword = e.target[1].value;
        console.log(userPassword);
        axios
            .get("./Users.json")
            .then(res => {
                res.data.forEach(user => {
                    if (user.email === userEmail && user.password === userPassword) {
                        console.log("Logged in")
                        setUser(user)

                    }
                });
            })
            .catch(err => { console.log(err) });
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
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


