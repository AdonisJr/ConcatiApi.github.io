import React, { useState, useEffect, useRef } from 'react'
import * as authApi from '../api/Auth'

export default function Login() {

    const [userProfile, setUserProfile] = useState();
    const [token, setToken] = useState();
    const [message, setMessage] = useState('');
    

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const credentials = {
            username: emailRef.current.value,
            password: passwordRef.current.value
        }
        try{
            const data = await authApi.Login(credentials)

            console.log(data.data)
            localStorage.setItem('token', JSON.stringify(data.data.access_token))
            localStorage.setItem('user_profile', JSON.stringify(data.data.user_profile))

            setMessage({success: 'Login Success'})

        }catch(error){
            console.log(error)
            setMessage({error: `${error}`})
        }
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} action="" className='d-flex gap-3 flex-column card p-3 mt-5'>
            
            <h1>Login</h1>
            <div style={{ display: message ? 'block' : 'none' }}
            className={ message.error ? 'alert alert-danger' : 'alert alert-success' }
            >
                <h3>{ message.error ? message.error : message.success }</h3>
            </div>
            <input type="email" name='email' id='email' placeholder='Email' className='form-control' ref={emailRef} required />
            <input type="password" name='password' id='password' placeholder='Password' className='form-control' ref={passwordRef} required />
            <input type="submit" name="loginBtn" id="loginBtn" value="Login" className='form-control btn btn-primary' />
        </form>
    </div>
  )
}
