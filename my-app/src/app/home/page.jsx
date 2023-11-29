"use client"
import Link from 'next/link'
import { useState } from 'react';
import LoginPage from '@/app/login/page'
import SignUpPage from '@/app/signup/page'

export default function Hero(){
    
    return(
        <>
           <LoginPage />
           <SignUpPage />
        </>
    );
}
{/* checkout the video @42:45 */}