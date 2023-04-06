import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/homeAnime.json";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='p-4  flex my-container flex-col-reverse lg:flex-row items-center justify-between pt-5 lg:pt-20'>
            <div className='lg:w-3/5 space-y-4 mt-5 lg:m-0'>
                <p className='lg:text-4xl text-3xl font-semibold text-slate-800'>Life is short, buy the shoes – and everything else – with our  <span className='text-error'>e-commerce app.</span></p>
                <p className='text-slate-800 '>Introducing our e-commerce platform – the ultimate shopping destination for all your needs and wants. Whether you're searching for the latest fashion trends, the newest tech gadgets, or the perfect gift for a loved one, we've got you covered.</p>
                <Link className='btn-error rounded-sm shadow-lg btn ' to={"/order"}>Visit Store</Link>
            </div>
            <Lottie className='w-full' animationData={groovyWalkAnimation} loop={true} />
        </div>
    );
};

export default Home;