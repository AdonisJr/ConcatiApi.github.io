import React, {useRef, useState} from 'react'
import axios from 'axios'
import * as config from '../config/Config'
import * as usersApi from '../api/Users'

export default function Auth() {

    const emailRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();

    const [userDetails, setUserDetails] = useState([])

    const getAuthorizationToken = async () =>{
        try {
            const { data } = await axios.post(`${config.WALLETS_SERVICE_URL}/auth`, {
                key: config.ADMIN_API_KEY,
                secret: config.ADMIN_SECRET_KEY,
            })
    
            return data.access_token
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const authorizationToken = await getAuthorizationToken();
        // console.log(authorizationToken);
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        // const mobile = mobileRef.current.value;

        const userInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            mobile: mobileRef.current.value,
            first_name: 'Adonis Jr',
            last_name: 'Suico',
            // region,
            // province,
            // city_municipality: municipality,
            // barangay,
            // address: streetAddress,
            meta: {
                key: emailRef.current.value,
                // location: geocode.results[0].formatted_address,
                // coordinates: `${geocode.results[0].geometry.location.lat},${geocode.results[0].geometry.location.lng}`,
                // friends: [],
            },
        }
                const data = await axios.post(
                    'https://api.concati.com/users/accounts', 
                    userInfo, 
                     {
                        headers: {
                            Authorization: `Bearer ${authorizationToken}`,
                        },
                    }
                )
                console.log(data)    
    }

    const getAllUsers = async () =>{
        const AuthorizationToken = await getAuthorizationToken();
        console.log(AuthorizationToken)
        try{
            const data = await axios.get('https://api.concati.com/users/accounts',
            {
                headers:{
                    Authorization: `Bearer ${AuthorizationToken}`
                }
            })
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    // console.log(userDetails)
    // getAllUsers()
    
  return (
    <div>
        <form action="">
            <input type="email" name='email' ref={emailRef} placeholder='Email' />
            <input type="text" name='mobile' ref={mobileRef} placeholder='Mobile' />
            <input type="password" name='password' ref={passwordRef} placeholder='Password' />
            <input type="button" value='Register' onClick={handleSubmit}/>
            <input type="button" onClick={getAllUsers} value='View all users' />
        </form>
    </div>
  )
}
