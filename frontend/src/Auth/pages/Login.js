import React from 'react';

const Login = () => {

    return (
        <div>
            <h2>Login</h2>
            <input
                name='email'
                type='text'
                placeholder='email' />
            <input
                name='password'
                type='text'
                placeholder='password' />
        </div>
    )
}
export default Login;