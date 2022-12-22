import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <li> <Link to='/home'>HOME</Link> </li>

        <li><Link to='/about'>ABOUT</Link></li>

        <li> <Link to='/blogs'>BLOGS</Link> </li>
        <li> <Link to='/portfolio'>MY PORTFOLIO</Link> </li>

        {
            user && <li> <Link to='/dashboard'>DASHBOARD</Link> </li>
        }

        <li> {
            user ? <button onClick={logout} className='btn btn-accent'>SignOut</button>
                : <Link to='/login'>LOGIN</Link>
        }
        </li>

    </>
    return (
        <div>
            <div class="navbar   bg-neutral rounded">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-accent lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="font-bold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <h2 className='text-2xl font-bold text-white'>BIKE EQUIPMENTS</h2>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="text-white font-bold menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;