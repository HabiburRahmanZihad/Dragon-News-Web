import React, { use, useEffect } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const NewsDetails = () => {
    const { id } = useParams();
    const [news, setNews] = React.useState([]);
    const { loading } = use(AuthContext);

    const data = useLoaderData();

    // Find news details when data or id changes
    useEffect(() => {
        const newsDetails = data.find((news) => news.id == id);
        setNews(newsDetails);
    }, [data, id]);

    

    if (loading) {
        return <p className='text-center text-2xl font-bold'>Loading...</p>;
    }

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto my-10 space-y-10 md:space-y-0 md:grid grid-cols-12 gap-6'>
                <section className='col-span-9 space-y-6'>
                    <h1 className='font-bold text-xl'>Dragon News</h1>

                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;