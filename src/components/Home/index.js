import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import RightArrow from '../../assets/right.png'

function Home() {
    return (
        <div className="container ">
            <h1 className='text-5xl font-black text-white pt-12'>
                Css Playground
            </h1>
            <h6 className='font-semibold text-gray-400 my-7 font-sm'>
                Learn/play with CSS using <br /> sliders.
            </h6>
            <div>
                <Link to={"/flex/wrap"} className={`flex-1 p-3 border border-white bg-white rounded-full w-1/2 block text-center font-semibold text-gray-700 text-sm`}>
                    Try me..
                </Link>
            </div>
            <div className='mt-12 text-white'>
                <h3 className='text-2xl font-bold mb-4'>Properties</h3>
                <div className='flex justify-between items-center gap-8'>
                    <div>
                        <h4 className='text-lg font-bold'>
                            Box Shadow
                        </h4>
                        <p className='font-semibold text-sm text-gray-400 border-b border-gray-800 pt-1 pb-3'>
                        Learn/play with Box Shadow using sliders.
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-8'>
                    <div>
                        <h4 className='text-lg font-bold'>
                            Flex Wrap
                        </h4>
                        <p className='font-semibold text-sm text-gray-400 border-b border-gray-800 pt-1 pb-3'>
                        Learn/play with Flex Wrap using sliders.
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
