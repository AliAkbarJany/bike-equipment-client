import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { Link,useNavigate } from "react-router-dom";
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    // create (user) with (Google)
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    // React-hook-form
    const { register, formState: { errors }, handleSubmit } = useForm();

    // create (User) with (Email/pass)..
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //   Name Update...
    const [updateProfile, updating, uerror] = useUpdateProfile(auth);

    // Hooks..
    const[token]=useToken(user||guser)
    
    // Navigate..
    const navigate=useNavigate()

    if(token){
        navigate('/home')
    }

    if (user || guser) {
        console.log(user, guser)
    }
    let errorMessage;
    if (error || gerror ||uerror) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message|| uerror?.message}</p>;
    }

    if (loading || gloading||updating) {
        return <Loading></Loading>
    }

    // submit..
    const onSubmit = async(data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name })
        
        console.log('update completed')
    };

    
    return (
        <div className='grid justify-items-center content-center h-100 py-10'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl my-8">
                <div class="card-body">
                    <h2 class="text-center font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name.... */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },

                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span className=' label-text-alt text-red-500'>{errors.name.message}</span>}


                            </label>
                        </div>
                        {/* Email... */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className=' label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className=' label-text-alt text-red-500'>{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* Password... */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Enter Your password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or Longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className=' label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className=' label-text-alt text-red-500'>{errors.password.message}</span>}

                            </label>
                        </div>

                        {errorMessage}
                        <input className='btn w-full' type="submit" value="Register" />
                    </form>
                    <p><small>Have An account? <Link to='/login' className='text-orange-500'>Please Login </Link></small></p>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-active btn-primary"
                    >CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Register;