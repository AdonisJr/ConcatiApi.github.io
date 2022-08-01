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

// API CODES BELOWWWWWWWWWWWWWWWWWWWWWWWWWWW

export const getDeliveryDetails = async(transaction_id) => {
    return await axios.get(`https://api.concati.com/logistics/delivery/${transaction_id}`)
}

export const bookDelivery = async(delivery_details) => {
    return await axios.post('https://api.concati.com/logistics/delivery', delivery_details)

}