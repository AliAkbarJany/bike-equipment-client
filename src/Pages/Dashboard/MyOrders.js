import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://bike-equipments-server.onrender.com/confirm?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('order', data)
                setOrders(data)
            })
    }, [])
    return (
        <div>
            <div >
                <h1 className='text-2xl'>My Orders:{orders.length}</h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Tool Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map((order, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.toolName}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                        {(order.price && order.paid) && <span className='text-success'>Already Paid</span>}
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;