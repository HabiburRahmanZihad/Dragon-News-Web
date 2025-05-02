import React, { useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    const { id,title, thumbnail_url, details } = news;



    // Scroll to top when news id changes
    useEffect(() => {
        window.scrollTo({
            top: 160,
            behavior: 'smooth'
        });
    }, [id]);
    return (
        <div className='p-2 md:p-8 space-y-6  rounded-md shadow-md'>
            <img className='w-full rounded' src={thumbnail_url} alt={title} />

            <h1 className='text-[#403F3F]  text-2xl md:text-4xl font-semibold'>{title}</h1>

            <p className='text-[#706F6F]'>{details} </p>

            <Link to={`/category/${news.category_id}`}><button className='btn btn-secondary text-xl font-medium flex  items-center mb-4'> <FaArrowLeftLong />All news in this category</button></Link>

        </div>
    );
};

export default NewsDetailsCard;