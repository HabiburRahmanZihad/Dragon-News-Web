import React from 'react';
import classimage from '../../assets/class.png';
import playground from '../../assets/playground.png';
import swimming from '../../assets/swimming.png';
import bg from '../../assets/bg.png';

const Qzone = () => {
    return (
        <div className=' space-y-5'>
            <div className='bg-base-200  p-5'>
                <h2 className='font-bold text-xl mb-5'>Q-Zone</h2>
                <div >
                    <img className='w-full mx-auto' src={classimage} alt="" />
                    <img className='w-full mx-auto' src={playground} alt="" />
                    <img className='w-full mx-auto' src={swimming} alt="" />
                </div>
            </div>
            <img className='w-full' src={bg} alt="" />
        </div>
    );
};

export default Qzone;