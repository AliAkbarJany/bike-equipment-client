import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Purchase = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth);
    console.log(user)

    // const { data: tool, isLoading, error } = useQuery(['tool', id], () => fetch(`https://bike-equipments-server.onrender.com/tools/${id}`).then(res => res.json()))
    // // const{img,name,minimumQuantity,availableQuantity,description,price}=tool

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const [tool,setTool]=useState({})
    useEffect(()=>{
        fetch(`https://bike-equipments-server.onrender.com/tools/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTool(data)
        })
    },[id])

    const handleOrderConfirm= event =>{
        event.preventDefault()
        
        const name=event.target.name.value
        const email=event.target.email.value
        const toolName=event.target.toolName.value
        const price=event.target.price.value
        const order=event.target.order.value
        const address=event.target.address.value
        const phone=event.target.phone.value
        
        
        const minimumQuantity= parseInt(tool.minimumQuantity)
        const availableQuantity =parseInt(tool.availableQuantity)
        // console.log(order,name,email,toolName,address,minimumQuantity,availableQuantity)
        const confirm={
            name,
            email,
            toolName,
            price,
            order,
            address,
            phone
        }
        console.log('confirm',confirm)
        if(order<minimumQuantity){
            alert('Please fullfill at least Minimum Quantity')
        }
        else if(order>availableQuantity){
            alert('Be Careful about Available Quantity')
        }
        else{
            fetch('https://bike-equipments-server.onrender.com/confirm',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(confirm)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.success){
                    alert('Your order is  confirmed')
                }
                else{
                    alert('Already confirmed.please try another order')
                }
            })
        }

       

        
    }
    return (
        <div>
            <h2 className='text-2xl text-center py-16'>Purcahse page:</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center'>
                <div class="card lg:max-w-lg glass">
                    <figure><img src={tool.img} alt="car!" /></figure>
                    <div class="card-body  items-center text-center">
                        <h2 class="text-3xl font-bold">{tool.name}</h2>
                        <p > <span className='text-green-500'>Description:</span>  {tool.description}</p>
                        <p > <span className='text-green-500'>Price:</span>  {tool.price}</p>
                        <p > <span className='text-green-500'>Minimum Quantuty:</span>  {tool.minimumQuantity}</p>
                        <p> <span className='text-green-500'>Available Quantity:</span>  {tool.availableQuantity}</p>

                    </div>
                </div>

                <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                    <figure><img src={tool.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-3xl font-bold">Purchase Information</h2>
                        <form onSubmit={handleOrderConfirm} className='grid gap-3 justify-items-center'>

                            <input  type="text" name='name' disabled value={user?.displayName} placeholder="Type here" class="input  text-red-400 input-bordered w-full max-w-xs" />
                            <input type="email" name='email' disabled value={user?.email} placeholder="Type here" class="input text-green-900 input-bordered w-full max-w-xs" />
                            <input type="text" name='toolName' disabled value={tool.name} placeholder="Type here" class="input text-red-500 input-bordered w-full max-w-xs" />
                            <input type="text" name='price' disabled value={tool.price} placeholder="Type here" class="input text-red-500 input-bordered w-full max-w-xs" />
                            <input type="number" name='order'  placeholder={`Minimum Order Quantity (${tool.minimumQuantity})`} class="input text-red-500 input-bordered w-full max-w-xs" />
                            <input type="text" name='address' placeholder="Your Address" class="input text-red-500 input-bordered w-full max-w-xs" />
                            <input type="number" name='phone' placeholder="Phone Number" class="input text-red-500 input-bordered w-full max-w-xs" />
                            <input type="submit" value='CONFIRM'  class="input text-red-500 btn-outline btn-accent input-bordered w-full font-bold" />
                            {/* <input type="submit" value="Confirm Order" class="btn btn-primary input input-bordered w-full max-w-xs" /> */}
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Purchase;