import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import { useEffect } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState()
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { price, name, email } = order;
    // const amount = parseInt(price)
    // console.log('amount', amount)

    useEffect(() => {
        fetch('https://bike-equipments-server.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(price)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data?.clientSecret) {
                //     setClientSecret(data.clientSecret)
                // }
            })
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
        }
        else {
            setCardError('');
        }

        setCardError(error?.message || '')
        // setSuccess('')

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        console.log(paymentIntent)

        // if(intentError){
        //     setCardError(intentError?.message)
        // }
        // else{
        //     setCardError('')
        //     console.log('paymentIntent',paymentIntent)
        //     setSuccess('Your payment is completed')
        // }

        // if(intentError){
        //     console.log(intentError)
        // }
        // else{
        //     setCardError('')
        //     console.log('paymentIntent',paymentIntent)
        //     setSuccess('Your payment is completed')
        // }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs btn-success' type="submit" disabled={!stripe }>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {/* {
                success && <p className='text-green-500'>{success}</p>
            } */}
        </>
    );
};

export default CheckoutForm;