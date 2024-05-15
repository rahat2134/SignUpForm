import React, { useState } from 'react'
import './signUpForm.css'
const SignUpForm = () => {
    // use useState for storing input data we get from the user.
    const [data, setData] = useState({
        userName: '',
        password: '',
        phoneNo: '',
        email:'',
        address:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        alert('Your details has been saved successfully.');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up Form</h1>
                <input
                    onChange={handleChange}
                    type="text"
                    name="userName"
                    value={data.userName}
                    required
                    placeholder='Type your username here...'
                />
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={data.password}
                    required
                    placeholder='Type your password here...'
                />
                <input
                    onChange={handleChange}
                    placeholder='Type your phone number here...'
                    type="text"
                    name='phoneNo'
                    value={data.phoneNo}
                />
                <input
                    onChange={handleChange}
                    placeholder='Type your email here...'
                    type="email"
                    name='email'
                    value={data.email}
                />
                <input
                    onChange={handleChange}
                    placeholder='Type your address here...'
                    type="text"
                    name='address'
                    value={data.address}
                />
                <button type='submit'>Log In</button>
            </form>

        </>
    )
}
export default SignUpForm;