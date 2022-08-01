import React from 'react';
import axios from 'axios';
import * as config from '../config/Config'
import * as apiLogistics from '../api/Logistics'

export default function BookDelivery() {


    // // get AuthenticationToken function
    // const getAuthenticationToken = async () =>{
    //     try {
    //         const { data } = await axios.post(`${config.WALLETS_SERVICE_URL}/auth`, {
    //             key: config.API_KEY,
    //             secret: config.SECRET_KEY,
    //         })
    
    //         return data.access_token
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    const handleApi = async() =>{
        // const authorizationToken = await getAuthenticationToken();
        const transaction_id = 'f7f6d7d3-1c28-462a-9426-e131c0a903ad'

        const deliveryDetails = [{
            "merchant_id": "VCD2EMU2BPO05IWUPKAWW0Q7R5YWKL1C",
            "sender": {
              "mobile": "09123456789",
              "last_name": "Graham",
              "first_name": "Joey",
              "email": "Lyric_Schaefer@yahoo.com"
            },
            "recipient": {
              "mobile": "09123456789",
              "last_name": "Kuhlman",
              "first_name": "Jack",
              "email": "Thora_Batz43@yahoo.com"
            },
            "payment_method": "CASH",
            "channel": "mr_speedy",
            "packages": [
              {
                "code": "9swqksw910",
                "name": "gizd43z4i9u6yptdmgkg1oissufx5g2yc5s13lml",
                "description": "Deserunt omnis odit aut et.",
                "quantity": 1,
                "price": 0,
                "dimensions": {
                  "height": 7,
                  "width": 2,
                  "depth": 7,
                  "weight": 2
                }
              }
            ],
            "origin": {
              "address": {
                "address1": "4F Uptown Place Mall",
                "address2": "",
                "barangay": "",
                "city_municipality": "Taguig",
                "province": "Metro Manila"
              },
              "coordinates": {
                "latitude": 14.557143769031468,
                "longitude": 121.05432015697117
              }
            },
            "destination": {
              "address": {
                "address1": "McKinley Pkwy",
                "barangay": "",
                "city_municipality": "Taguig",
                "province": "Metro Manila"
              },
              "coordinates": {
                "latitude": 14.54991609927194,
                "longitude": 121.05577927868111
              }
            }
            
            }
            // ,{
            //     headers: {
            //         "Authorization": `Bearer ${authorizationToken}`
            //     }
            // }
        ]
      
            console.log(deliveryDetails)
            try{
                apiLogistics.bookDelivery(deliveryDetails).then(response =>{
                    console.log(response)
                })
            }catch(error){
                console.log(error)
            }
          }

        
    
    handleApi()
  return (
    <div>Logistics</div>
  )
}
