import React from 'react';
import banner1 from '../../images/banner/banner1.png'
import banner2 from '../../images/banner/banner2.png'
import banner3 from '../../images/banner/banner3.png'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img className='w-full' src={banner1} />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img className='w-full' src={banner2} />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img className='w-full' src={banner3} />
                </div>
                
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                
            </div>
        </div>
    );
};

export default Banner;