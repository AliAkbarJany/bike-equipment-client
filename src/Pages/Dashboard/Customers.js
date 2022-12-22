import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import CustomerRow from './CustomerRow';
const Customers = () => {

    const { data: customers, isLoading, refetch } = useQuery('customers', () => fetch('https://bike-equipments-server.onrender.com/customer', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All CUstomer are here:{customers.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Create Admin</th>
                            <th>Delete Customer</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            customers.map((customer, index) => <CustomerRow
                                key={customer._id}
                                customer={customer}
                                index={index}
                                refetch={refetch}
                            >

                            </CustomerRow>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Customers;