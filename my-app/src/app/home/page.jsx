"use client"
import Link from 'next/link'
import ImageSlider from '@/components/ImageSlider';
import Profile from '@/app/profile/page'
import { useState } from 'react';

export default function Hero(){
    const [isOpen,setIsOpen] = useState(false);
    function toggleNavbar(){
        setIsOpen(!isOpen);
    }
    return(
        <>
            {isOpen && <Profile />}
            <div className="fixed bottom-0 w-full bg-gray-200 p-4 flex justify-between">        
                <Link className="mr-4" href="/">Home</Link>
                <Link className="mr-4" href="/movies">Movies</Link>
                <button onClick={toggleNavbar}>profile</button>
            </div>
            {isOpen && <Profile />}
            <div className='fixed top-0 w-full bg-gray-800 p-4 flex items-center justify-center'>
                <div className='flex items-center'>
                    <div className='h-2 w-16 mr-4 '>
                        <span className='m-auto text-white text-lg font-bold'>MBOS</span>
                    </div>
                </div>
            </div>
            <ImageSlider/>
        </>
    );
}