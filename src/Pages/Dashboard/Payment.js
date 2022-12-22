import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LEr9KBhhQqyCqe6pdI3j9qwMMZZCdC2wHTxL5Zyv3QGdZoJvg5iv6bVSxvonKuO9ag4l4bdADRBDPoNKTzUKdiV00eUm9i66S');

const Payment = () => {
    const { id } = useParams()
    const url = `https://guarded-caverns-84789.herokuapp.com/confirm/${id}`
    const { data: order, isLoading } = useQuery(['confirm', id], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'> payment page :{id}</h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">pay for:</h2>
                    <p>Your payment for order</p>
                    <p>Please pay:${order.price} </p>

                </div>
            </div>
            <div class="card w-50 max-w-md bg-base-100 shadow-2xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;