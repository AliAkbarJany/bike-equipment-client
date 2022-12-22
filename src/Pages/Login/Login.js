import React from 'react';
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { Link,useNavigate, useLocation} from "react-router-dom";
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    //   hooks....
      const[token]=useToken(user||guser)

    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    //Require Auth Navigate..
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    if(loading || gloading){
        return <Loading></Loading>
    }

    // if (user || guser) {
    //     // console.log(user,guser)
    //     navigate(from, { replace: true });
    // }

    if(token){
        navigate(from, { replace: true });
    }

    let errorMessage;
    if(error||gerror){
        errorMessage=<p className='text-red-500'>Error: {error?.message || gerror?.message}</p>;
    }
    return (
        <div className='grid justify-items-center content-center h-screen py-10'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-8">
                <div class="card-body">
                    <h2 class="text-center font-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email.... */}
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
                        <input className='btn w-full' type="submit" value="Login" />
                    </form>
                    <p><small>Are You New Here? <Link to='/register' className='text-orange-500'>Please Create A New Account </Link></small></p>
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

export default Login;