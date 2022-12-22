import React from 'react';

import { IoEarthOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { GoDesktopDownload } from "react-icons/go";
import { BsPeople } from "react-icons/bs";

const Summaries = () => {
    return (
        <div className='my-12'>
            <h2 className='text-4xl text-center text-green-500 font-bold py-4'>Our Achivements</h2>


            <div className='grid grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div class="card lg:max-w-lg bg-neutral text-neutral-content shadow-xl">
                    <figure class="text-4xl px-10 pt-10">
                        < IoEarthOutline />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="stat-value">60 +</h2>
                        <p>Countries</p>

                    </div>
                </div>
                <div class="card lg:max-w-lg bg-neutral text-neutral-content shadow-xl">
                    <figure className='text-4xl px-10 pt-10'>
                        <FcLike />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="stat-value">493 +</h2>
                        <p>Customer feedBacks</p>

                    </div>
                </div>
                <div class="card lg:max-w-lg bg-neutral text-neutral-content shadow-xl">
                    <figure className='text-4xl px-10 pt-10'>
                        <GoDesktopDownload />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="stat-value">353 +</h2>
                        <p>Completed Projects</p>

                    </div>
                </div>
                <div class="card lg:max-w-lg bg-neutral text-neutral-content shadow-xl">
                    <figure className='text-4xl px-10 pt-10'>
                        <BsPeople />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="stat-value">186 +</h2>
                        <p>Happy Customers</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Summaries;