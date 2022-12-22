import React from 'react';

import mypic from '../../images/my pic 1.png'

const MyPortfolio = () => {
    return (
        <div className=''>
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={mypic} class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-4xl font-bold">MD.ALI AKBAR HASHAMI RAFSAN JANY</h1>
                            <h2 className='text-2xl text-green-500'> <span className='font-bold'>Email:</span>  aliakbarjany19@gmail.com</h2>
                            <h2 className='text-2xl text-green-500'>Student of <span className='font-bold'>Daffodil International Universirty(DIU)</span> </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center py-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-center font-bold">Visit my some Websites</h2>
                        <a className='text-green-500 text-center' href="https://assignment-ten-c55ee.web.app/">website one</a>
                        <a className='text-green-500 text-center' href="https://brilliant-concha-564218.netlify.app/">website two</a>
                        <a className='text-green-500 text-center' href="https://radiant-cucurucho-800a72.netlify.app/">website three</a>
                        
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-center font-bold">My Skills</h2>
                         <div className='text-center font-bold text-green-500'>
                            <h3>1.HTML</h3>
                            <h3>2.CSS</h3>
                            <h3>3.Java Script</h3>
                            <h3>4.React </h3>
                            <h3>5.Express Js</h3>
                            <h3>7.Node Js</h3>
                            <h3>8.Mongo Db</h3>
                            <h3>9.Bootstrap</h3>
                            <h3>10.Tailwind</h3>
                         </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;