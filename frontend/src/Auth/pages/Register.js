import React from 'react';

const Register = () => {

    return (
        <div>
            <h2>Register</h2>
            <input
                name='email'
                type='text'
                placeholder='email' />
            <input
                name='password'
                type='text'
                placeholder='password' />
            <input
                name='displayname'
                type='text'
                placeholder='display name' />
        </div>
    )
}

export default Register;