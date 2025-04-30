import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
            </header>

            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>

            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Root;