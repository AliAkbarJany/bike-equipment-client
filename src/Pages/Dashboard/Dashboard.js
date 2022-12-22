import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className=''>
                <div class="drawer drawer-mobile dashboard-sidebar">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col ">
                        {/* <!-- Page content here --> */}
                        <h2 className='text-2xl font-bold'>Dashboard</h2>
                        <Outlet></Outlet>


                    </div>
                    <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}

                            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>



                            {
                                admin ?
                                    <>
                                        <li><Link to='/dashboard/customers'>All Customers</Link></li>
                                        <li><Link to='/dashboard/manageAllOrders'>Manage all Orders</Link></li>
                                        <li><Link to='/dashboard/addAProduct'>Add A Product</Link></li>
                                    </>
                                    : <>
                                        <li><Link to='/dashboard'>My Orders</Link></li>
                                        <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                                    </>
                            }



                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;