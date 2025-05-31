import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import axios from 'axios';

const LatestNews = () => {

    const [latestNews, setLatestNews] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/news.json')
            .then(response => {
                // Filter for today's picks directly when setting state
                const todaysPicks = response.data.filter(item => item.others?.is_today_pick);
                setLatestNews(todaysPicks);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    // Loading skeleton
    if (loading) {
        return (
            <div className='p-3 bg-base-200 flex gap-4 items-center'>
                <button className='btn btn-secondary px-6 shrink-0'>Latest</button>
                <div className="flex-1 h-6 bg-base-300 animate-pulse rounded"></div>
            </div>
        );
    }

    // No news found
    if (latestNews.length === 0) {
        return (
            <div className='p-3 bg-base-200 flex gap-4 items-center'>
                <button className='btn btn-secondary px-6 shrink-0'>Latest</button>
                <p className="flex-1 font-medium">No latest news available at the moment</p>
            </div>
        );
    }

    // News found - display marquee
    return (
        <div className='p-3 bg-base-200 flex gap-4 items-center'>
            <button className='btn btn-secondary px-6 shrink-0'>Latest</button>
            <Marquee speed={60} pauseOnHover className='flex-1'>
                {latestNews.map((item, index) => (
                    <div key={item.id || index} className="flex items-center">
                        <p className="font-medium mr-4">{item.title}</p>
                        {index < latestNews.length - 1 && (
                            <span className="w-2 h-2 bg-secondary rounded-full shrink-0 mr-4"></span>
                        )}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default LatestNews;