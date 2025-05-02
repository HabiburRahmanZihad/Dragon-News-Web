import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { FaRegNewspaper } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);

    const { id } = useParams();
    const data = useLoaderData();


    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        } else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
            return;
        }  else {
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
        
    }, [data, id]);


    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.text.value.toLowerCase();
        const filteredNews = data.filter(news => news.title.toLowerCase().includes(searchText));

        if (filteredNews.length > 0) {
            setCategoryNews(filteredNews);
        } else {
            Swal.fire('No news found! Search another Topic.');
            return ;
        }

        e.target.reset();
    }



    return (
        <div>
            {/* Handle search */}

            <form onSubmit={handleSearch} className="input w-full mb-5">
                <MdOutlineScreenSearchDesktop size={35} />
                <input type="search" name='text' required placeholder="Search News Title......" />
                <button type="submit" className="btn btn-primary btn-sm btn-outline rounded-full">
                    Search <FaRegNewspaper size={20} />
                </button>
            </form>

            <div>
                {
                    categoryNews.map((news, index) => <NewsCard key={index} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;