import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='max-w-screen-lg mx-auto py-2 px-3 h-full'>
            <Header></Header>
            <h1 className='text-4xl font-extrabold text-center mt-5 mb-5'>Welcome To MealDB</h1>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Home;