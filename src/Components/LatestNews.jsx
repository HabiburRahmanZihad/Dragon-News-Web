import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className=' p-3 bg-base-200 flex gap-4 items-center '>


            <button className='btn btn-secondary px-6'>Latest</button>

            <Marquee speed={60} pauseOnHover className='gap-5' >
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </Marquee>


        </div>
    );
};

export default LatestNews;