"use client"
import {useEffect,useState} from 'react'
import Link from 'next/link';
import React from 'react';
import {userRouter} from 'next/navigation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function SignUpPage(){
    const [loading,setLoading]=useState(false)
    const router = useRouter()
    const onLogin = async()=>{
        try{
            setLoading(true)
            const response = await axios.post('/api/users/login',user);
            console.log("Log in status: "+response)
            router.push('/')
        } catch (error){
            console.log("login authentication error: "+error)
        } finally {
            setLoading(false)
        }
    }
    const [user,setUser] = useState({
        username: '',
        email: '',
        password: ''
    }) 
    return(
        <>
            <div 
                className='flex flex-col items-center justify-center min-h-screen py-2'><h1>{loading?"Authenticating":"Login"}</h1><br/>
                <label htmlFor='username'>username</label>
                <input
                    className='p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                    id='username'
                    type='text'
                    value={user.username}
                    onChange={(e)=>setUser({...user,username: e.target.value})}
                    placeholder='username'
                />
                <label htmlFor='password'>password</label>
                <input
                    className='p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                    id='password'
                    type='password'
                    value={user.password}
                    onChange={(e)=>setUser({...user,password: e.target.value})}
                    placeholder='Enter your password'
                />
                <button 
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                    onClick={onLogin}>Login</button>
                
            </div>
        </>
    );
}