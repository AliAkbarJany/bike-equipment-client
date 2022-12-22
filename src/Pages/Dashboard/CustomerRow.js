import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CustomerRow = ({ customer, index, refetch }) => {
    const { _id, email, role } = customer;
    // Make Admin.......
    const makeAdmin = () => {
        fetch(`https://bike-equipments-server.onrender.com/customer/admin/${email}`, {
            method: 'PUT',
            headers: {

                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert('You Are Not Allowed to make Admin')
                }
                // multiple line korle of course (return) use korte hobe
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Admin is successfully made`)
                }

            })
    }

    // Delete Users.....
    const [users, setUsers] = useState([]);
    // React Query....

    console.log(users);
    const handleDeleteUser = (id) => {
        const proceed = window.confirm("Are you sure to Delete this User");
        if (proceed) {
            fetch(`http://localhost:5000/deleteCustomer/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = users.filter((user) => user._id !== id);
                    console.log(remaining);
                    refetch();
                    setUsers(remaining);
                });
        }
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td className="font-bold">
                {role !== "admin" ? (
                    <button onClick={makeAdmin} class="btn btn-xs text-warning">
                        Make Admin
                    </button>

                ) : (
                    "ADMIN"
                )}
            </td>
            <td>
                <button
                    onClick={() => handleDeleteUser(_id)}
                    class="btn btn-xs text-warning"
                >
                    Delete user
                </button>
            </td>
        </tr>
    );
};

export default CustomerRow;