import axios from 'axios';
import * as config from '../config/Config'

// get CLIENT AuthenticationToken function
const getClientAuthorizationToken = async() => {
    try {
        const { data } = await axios.post(`${config.WALLETS_SERVICE_URL}/auth`, {
            key: config.API_KEY,
            secret: config.SECRET_KEY,
        })
        return data.access_token
    } catch (error) {
        console.log(error)
    }
}

// CLIENT SIDE

// API CODES BELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWWWWWWWWWWWWWWWWWWWWWW

// Register new USER CLIENT
export const Register = async (credentials) =>{
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return(
        axios.post('https://api.concati.com/users/register', credentials,
         {
            headers: {
            Authorization: `Bearer ${clientAuthorizationToken}`,
        },
    })

    )

}

// Login CLIENT

export const Login = async (credentials) =>{
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return(
        axios.post('https://api.concati.com/users/login', credentials,
        {
            headers: {
                Authorization: `Bearer ${clientAuthorizationToken}`
            }
        }
        )
    )
}

