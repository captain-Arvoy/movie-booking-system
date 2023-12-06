"use client"
import Link from 'next/link'
import { useState } from 'react';
import LoginPage from '@/app/login/page'
import SignUpPage from '@/app/signup/page'
import Image from 'next/image'
import Card from '@/app/components/Card_'

export default function Hero() {

    return (
        <>
            <div className="carousel rounded-box gap-0.5">
                <div className="carousel-item">
                    <Image
                        src='/Image1.jpg' height={300} alt="courousel" width={500}/>
                </div>
                <div className="carousel-item">
                    <Image
                        src='/Image2.jpg' height={300} alt="courousel" width={500}/>
                </div>
                <div className="carousel-item">
                    <Image
                        src='/Image3.jpg' height={300} alt="courousel" width={500}/>
                </div>
            </div>
            <Card />
        </>
    );
}