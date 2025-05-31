import React from 'react';
import classimage from '../../assets/class.png';
import playground from '../../assets/playground.png';
import swimming from '../../assets/swimming.png';
import bg from '../../assets/bg.png';
import { motion } from 'motion/react';

const Qzone = () => {
    return (
        <div className=' space-y-5'>
            <div className='bg-base-200  p-5'>
                <motion.h2
                    animate={{
                        color: ['#000', '#ff0000', '#000'],
                        transition: { duration: 5, repeat: Infinity }
                    }}
                    className='font-bold text-xl mb-5'>Q-Zone</motion.h2>
                <div >

                    <motion.img
                        animate={{
                            y: [0, -10, 0],
                            // scale: [1, 1.05, 1],
                            transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                        }}
                        className='w-full mx-auto' src={classimage} alt="" />

                    <motion.img
                        animate={
                            {
                                // scale: [1, 1.05, 1],
                                x: [10, -10, 10],
                                transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                            }
                        }
                        className='w-full mx-auto' src={playground} alt="" />

                    {/* <img className='w-full mx-auto' src={swimming} alt="" /> */}
                    <motion.img
                        animate={{
                            y: [0, 10, 0],
                            // scale: [1, 1.05, 1],
                            transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                        }}
                        className='w-full mx-auto' src={swimming} alt="" />
                </div>
            </div>
            <motion.img
                animate={
                    {
                        scale: [1, 1.05, 1],
                        transition: { duration: 2, }
                    }
                }
                className='w-full' src={bg} alt="" />
        </div>
    );
};

export default Qzone;