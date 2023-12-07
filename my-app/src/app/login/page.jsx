"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link';
import React from 'react';
import { userRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextResponse, NextRequest } from 'next/server';
import { useRouter } from 'next/navigation';
export default function SignUpPage() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const onLogin = async () => {
        
    }
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })
    return (
        <>
            <div
                className='flex flex-col items-center justify-center min-h-screen py-2 bg-primary text-primary'><h1>{loading ? "Authenticating" : "Login"}</h1><br />
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    limit={2}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <label htmlFor='username'>username</label>
                <input
                    className='p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-secondary'
                    id='username'
                    type='text'
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder='username'
                />
                <label htmlFor='password'>password</label>
                <input
                    className='p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-secondary'
                    id='password'
                    type='password'
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder='Enter your password'
                />
                <button
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                    onClick={onLogin}>Login</button><br />
                <div>Don't have an Account</div>
                <Link
                    href='/signup'>Register Here!</Link>

            </div>
        </>
    );
}