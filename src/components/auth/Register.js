import axios from 'axios';
import React, {useState, useRef} from 'react';
import * as authApi from '../api/Auth';
import * as config from '../config/Config';

export default function Register() {
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();

    const [ message, setMessage ] = useState('');


    const handleSubmit = async (e) =>{
        e.preventDefault();
        // required field(EMAIL, MOBILE with 09121793542 format, Date of birth with ISO format eg. 1996-06-11 {yyyy-mm-dd})

        const credentials = {
            "email": emailRef.current.value,
            "mobile": mobileRef.current.value,
            "first_name": firstNameRef.current.value,
            "middle_name": "Moen",
            "last_name": lastNameRef.current.value,
            "suffix": "Sr.",
            "nickname": "Amya",
            "password": passwordRef.current.value,
            "birthdate": "1996-07-10",
            "sex": "MALE",
            "civil_status": "MARRIED",
            "region": "NCR",
            "province": "Metro Manila",
            "city_municipality": "Manila",
            "barangay": "Random",
            "address": "30847 Keyshawn Walks",
            "meta": {
              "key": "value"
            }
          }
        const data = await authApi.Register(credentials).then(response =>{
            // if request successful will return status code: 200
            if(response.status === 200){
                setMessage ({success: 'Successfuly registered'});
                setTimeout(() => {
                    window.location.href= '/Login'
                }, 3000);
                
            }
        }).catch(error =>{
            
            setMessage({error: `${error.message}, Existing Email or Mobile, Please Check!`})
        })
    }
  return (
    <div>
        <div className='container'>
        <form action="" onSubmit={handleSubmit} className='d-flex gap-3 flex-column card p-3 mt-5'>
            <h1>Register</h1>

            {/* MESSAGE DIV DIV */}
            <div style={{display: message ? 'block': 'none' }} 
            // if message is error then classname alert danger
            
            className={message.error ? 'alert alert-danger sm' : 'alert alert-success sm'}
            >
                {/* display the message content */}
                {message.error ? message.error : message.success}
             </div>


            <input type="email" name='email' id='email' placeholder='Email' className='form-control' ref={emailRef} required />
            <input type="text" name="first_name" id="first_name" placeholder='First Name' className='form-control' ref={firstNameRef} required />
            <input type="text" name="last_name" id="last_name" placeholder='Last Name' className='form-control' ref={lastNameRef} required />
            <input type="text" name="mobile" id="mobile" placeholder='Mobile' className='form-control' ref={mobileRef} required />
            <input type="password" name='password' id='password' placeholder='Password' className='form-control' ref={passwordRef} required />
            
            <input type="submit" name="loginBtn" id="loginBtn" value="Register" className='form-control btn btn-primary' />

        </form>
    </div>
    </div>
  )
}
