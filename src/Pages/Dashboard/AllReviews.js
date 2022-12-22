import React, { useEffect, useState } from 'react';

const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        fetch('https://bike-equipments-server.onrender.com/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllReviews(data)
            })
    }, [])
    return (
        <div>
            <div className='py-20'>
                <h2 className='text-4xl text-center text-green-500 font-bold py-4'>All Reviews:{allReviews.length}</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        allReviews.map(singleReview =>

                            <div class="card w-96 bg-emerald-700 shadow-xl text-white">
                                <div class="card-body">
                                    <h2 class="card-title">{singleReview.name}</h2>
                                    <p>{singleReview.review}</p>
                                    
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;