import React, { useEffect, useState } from 'react';

const AddAproduct = () => {
    
    const imageStorageKey='2d59c7729d24b4215adc2da4eeab7ea0'

    const handleProductAdd = event => {
        event.preventDefault()
        
        const img=event.target.photoUrl.value
        // console.log(img)
      
        const addProduct = {
            
            name:event.target.productName.value,
            description:event.target.description.value,
            price:event.target.price.value,
            minimumQuantity:event.target.minQuantity.value,
            availableQuantity:event.target.availableQuantity.value,
            img,
            
        }

        fetch('https://bike-equipments-server.onrender.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        

    }


    return (
        <div>
            <h2>Add A Product</h2>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                {/* <figure><img src="" alt="Shoes" /></figure> */}
                <div class="card-body">
                    <h2 class="text-3xl font-bold">Add a Product</h2>
                    <form onSubmit={handleProductAdd} className='grid gap-3 justify-items-center'>

                        <input type="text" name='productName' placeholder="Enter Product Name" class="input  text-red-400 input-bordered w-full max-w-xs" />
                        {/* <input type="text" name='description'  placeholder="Description" class="input text-green-900 input-bordered w-full max-w-xs" /> */}
                        <textarea name="description" class="textarea textarea-bordered text-black w-full" placeholder="Write your description"></textarea>
                        <input type="text" name='price' placeholder="Price" class="input text-red-500 input-bordered w-full max-w-xs" />

                        <input type="text" name='minQuantity' placeholder="Minimum Quantity" class="input text-red-500 input-bordered w-full max-w-xs" />
                        <input type="text" name='availableQuantity' placeholder="Maximum Quantity" class="input text-red-500 input-bordered w-full max-w-xs" />
                        {/* <input type="file" name='photo'  class="input text-red-500 input-bordered w-full max-w-xs" /> */}
                        <input type="text" name='photoUrl' placeholder="Enter your photo URL link"   class="input text-red-500 input-bordered w-full max-w-xs" />

                        <input type="submit" value='PRODUCT A ADD' class="input text-red-500 btn-outline btn-accent input-bordered w-full font-bold" />
                        {/* <input type="submit" value="Confirm Order" class="btn btn-primary input input-bordered w-full max-w-xs" /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAproduct;