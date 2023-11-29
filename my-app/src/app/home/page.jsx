"use client"
import Link from 'next/link'
import { useState } from 'react';
import LoginPage from '@/app/login/page'
import SignUpPage from '@/app/signup/page'

export default function Hero(){
    
    return(
        <>
            <div 
                className='p-4 bg-primary flex flex-col min-h-screen items-center justify-center py-2 text-primary text-2xl
                '><h1>Hello world
            </h1></div>
        </>
    );
}