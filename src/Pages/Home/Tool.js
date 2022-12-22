import React from 'react';
import { Link } from 'react-router-dom';


const Tool = ({ tool, setPurchase }) => {
    const { _id, img, name, minimumQuantity, availableQuantity, description, price } = tool

    return (
        <div>
            <div class="card w-full glass">
                <figure><img src={img} alt="car!" /></figure>
                <div class="card-body  items-center text-center">
                    <h2 class="text-3xl font-bold">{name}</h2>
                    <p > <span className='text-green-500'>Description:</span>  {description}</p>
                    <p > <span className='text-green-500'>Price:</span>  {price}</p>
                    <p > <span className='text-green-500'>Minimum Quantuty:</span>  {minimumQuantity}</p>
                    <p> <span className='text-green-500'>Available Quantity:</span>  {availableQuantity}</p>

                    <div class="card-actions ">
                        
                        <Link to={`/purchase/${_id}`}><button class="btn btn-outline  w-full">PURCHASE</button></Link>


                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Tool;