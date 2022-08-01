import axios from 'axios';
import * as config from '../config/Config';

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

// API CODES

export const CreateCategory = async (category_details) =>{
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return(
        axios.post('https://api.concati.com/inventory/admin/categories', category_details, 
        {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        }
        )
    )
}
