import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const Root = () => {
    return (
        <div>

            {/* Header SECTION */}
            <header>
                <Header></Header>

                <section className='w-11/12 mx-auto my-10'>
                    <LatestNews></LatestNews>
                </section>

                <nav className='w-11/12 mx-auto my-10'>
                    <Navbar></Navbar>
                </nav>

            </header>


            {/* Body SECTION */}
            <main className='w-11/12 mx-auto my-10 space-y-10 md:space-y-0 md:grid grid-cols-12 gap-6'>

                <aside className='col-span-3 md:sticky md:top-2 md:h-fit'><LeftAside></LeftAside></aside>

                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3 md:sticky md:top-2 md:h-fit'><RightAside></RightAside></aside>

            </main>


            {/* Footer SECTION */}
            <footer>

            </footer>
        </div>
    );
};

export default Root;