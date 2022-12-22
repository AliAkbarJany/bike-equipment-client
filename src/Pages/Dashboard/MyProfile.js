import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)

    // const { data: customers, isLoading } = useQuery('customers', () => fetch('https://bike-equipments-server.onrender.com/customer').then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const handleUpdateInformation=(event)=>{

        const update={
            education:event.target.education.value,
            location:event.target.location.value,
            phoneNumber:event.target.phone.value
        }
        event.preventDefault()
        fetch(`https://bike-equipments-server.onrender.com/customer/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`  
            },
            body:JSON.stringify(update)
        })
            .then(res =>  res.json())
            .then(data => {
                console.log(data)
            })

    }
    return (
        <div>
            <div className=''>
                <h1 className='text-2xl'>My Profile:{user.email}</h1>
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>

                            <td>{user.displayName}</td>
                            <td>{user.email}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="card-body">
                <h2 class="text-3xl font-bold text-center">Update Your Information</h2>
                <form onSubmit={handleUpdateInformation} className='grid gap-3 justify-items-center'>

                    <input type="text" name='education' placeholder="Enter your Education" class="input  text-red-400 input-bordered w-full max-w-xs" />
                    
                    <input type="text" name='location' placeholder="Enter Your City/District" class="input text-red-500 input-bordered w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="Enter Your Phone Number" class="input text-red-500 input-bordered w-full max-w-xs" />

                    

                    <input type="submit" value='Update Information' class="input text-red-500 btn-outline btn-accent input-bordered w-full max-w-xs font-bold" />
                    
                </form>
            </div>
        </div>
    );
};

export default MyProfile;