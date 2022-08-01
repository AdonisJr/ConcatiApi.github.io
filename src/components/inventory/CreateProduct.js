import React, {useState, useRef} from 'react'


export default function CreateProduct() {
    const productNameRef = useRef();
    const brandNameRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const productInfo = 
            {
                "store_id": "cc2c2ff8-f50c-4ab8-8fa0-579233a6a77a",
                "category_id": [
                "b99191e9-1233-4c12-81ce-a751627a6be2"
                ],
                "name": "Samsung",
                "brand_name": "Rustic Soft Shoes",
                "description": "Dolorem vitae fugiat aut possimus.",
                "is_active": false,
                "properties": [
                {
                "id": "color-1",
                "name": "color",
                "options": []
                },
                {
                "id": "size-1",
                "name": "size",
                "options": []
                }
                ],
                "variants": [
                {}
                ],
                "images": [
                {
                "media_id": "c3d2a8e4-ab76-4cd6-84ba-a741351e370c",
                "order": 1,
                "is_main": true
                }
                ],
                "metas": [
                {}
                ]
                }
        
    }

  return (
    <div>
        <form action="">
            <input className='form-control' type="text" name='product_name' id='product_name' ref={(productNameRef)} required />
            <input className='form-control' type="text" name='brand_name' id='brand_name' ref={(brandNameRef)} required />
            <input className='form-control' type="text" name='description' id='description' ref={(descriptionRef)} required />

            <input type="submit" value='Add products' />

        </form>
    </div>
  )
}
