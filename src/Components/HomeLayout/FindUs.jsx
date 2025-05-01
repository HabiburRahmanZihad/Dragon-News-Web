import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold text-xl mb-5'>Find us On</h2>
            <div>
                <div className="join join-vertical w-full rounded-box">

                    <Link
                        to='https://www.facebook.com/habiburrahmanzihad.zihad'
                        target='_blank'
                        className="btn join-item bg-base-100 justify-start">
                        <FaFacebook color='#3B599C' size={16}></FaFacebook> Facebook
                    </Link>

                    <Link to='https://x.com/xihad_xihad?t=9jRJb2U50ZCJDi_ZA4VLhQ&s=09'
                        target='_blank'
                        className="btn join-item bg-base-100 justify-start">
                        <FaTwitter color='#58A7DE' size={16}></FaTwitter>  Twitter
                    </Link>

                    <Link to='https://www.youtube.com/@xihadxone'
                        target='_blank'
                        className="btn join-item bg-base-100 justify-start">
                        <FaInstagram color='#D82D7E' size={16}></FaInstagram> Instagram
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FindUs;