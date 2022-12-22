import React from 'react';
import { toast } from 'react-toastify';
const AddReview = () => {

    const handleReview = event => {
        event.preventDefault()
        const name =event.target.name.value
        const review = event.target.review.value
        
        const addReview={
            name,
            review
        }
        console.log(review)
        fetch('https://guarded-caverns-84789.herokuapp.com/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(addReview)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('review',data)
            if(data.success){
                alert('we have accepted your review')
                
            }
            
        })
    }

   
    return (
        <div>
            <div className='py-20'>
                <form onSubmit={handleReview}>

                    <div class="card w-full bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">your Review</h2>
                            <input type="text" name="name" placeholder="Name" class="input input-bordered text-black w-full max-w-xs" />
                            <textarea name="review" class="textarea textarea-bordered text-black w-full" placeholder="Write your Review"></textarea>
                            <input type="submit" value='submit review'  class="input text-red-500 btn-outline btn-accent input-bordered w-full font-bold" />
                        </div>
                    </div>
                    

                </form>
            </div>
        </div>
    );
};

export default AddReview;