import React, {useState, useEffect, useRef} from 'react';
import * as inventoryApi from '../api/Inventory'
import { v4 as uuid } from 'uuid';

export default function CreateCategory() {

  const categoryNameRef = useRef();
  const descriptionRef = useRef();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const descriptionDetails = {
      
      "parent_id": uuid(),
      name: categoryNameRef.current.value,
      "description": descriptionRef.current.value,
      "media_id": "f1fa6ae0-9f8c-4cec-9265-20e601fc1645"
      
      }

      console.log(descriptionDetails)

      try{
        const data = await inventoryApi.CreateCategory(descriptionDetails)
        console.log(data)

      }catch(error){
        console.log(error)
      }
    
  }

    return ( 
      <div> 
        <h1>CREATE CATEGORY</h1>
        <form action="" onSubmit={handleSubmit}>
        
            <input className='form-control' type="text" name='category_name' id='category_name' ref={categoryNameRef} placeholder='Category Name' required />
            <input className='form-control' type="text" name='description' id='description' ref={descriptionRef} placeholder='Description' required />

            <input type="submit" value='Add products' />

        </form>
      </div>
    )
}