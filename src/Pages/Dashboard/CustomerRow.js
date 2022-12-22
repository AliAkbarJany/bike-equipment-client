import React from 'react';
import { toast } from 'react-toastify';

const CustomerRow = ({ customer, index, refetch }) => {
    const { email, role } = customer;
    const makeAdmin = () => {
        fetch(`https://guarded-caverns-84789.herokuapp.com/customer/admin/${email}`, {
            method: 'PUT',
            headers: {

                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    alert('You Are Not Allowed to make Admin')
                }
                // multiple line korle of course (return) use korte hobe
                return res.json()})
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Admin is successfully made`)
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">make admin</button>}</td>
            {/* <td>Blue</td> */}
        </tr>
    );
};

export default CustomerRow;