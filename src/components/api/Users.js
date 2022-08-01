import axios from 'axios';
import * as config from '../config/Config'

// ADMIN PANEL

// get ADMIN AuthenticationToken function
const getAdminAuthorizationToken = async() => {
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

// get all registered account
export const getAllAccounts = async() => {
    // get the authorization token using admin key
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        await axios.get('https://api.concati.com/users/accounts', 
        {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        }
        )
    )
}

// CREATE ACCOUNT
export const createAccount = async(credentials) => {
    // get the authorization token using admin key
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        await axios.post('https://api.concati.com/users/accounts', credentials, 
        {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        }
        )
    )
}