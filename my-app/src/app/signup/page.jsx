"use client"
import {useEffect,useState} from 'react'
import Link from 'next/link';
import React from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
export default function SignUpPage(){
    const router = useRouter()
    const onSignup = async()=>{
        try{
            setLoading(true)
            const response = await axios.post('/api/users/signup',user);
            console.log("Signup success",response.data)
            router.push('/login')
        }catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState({
        username: '',
        email: '',
        password: ''
    })
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    })
    const [buttonDisabled,setButtonDisabled]=useState(false);
    return(
        <>
            <div 
                className='flex flex-col items-center justify-center min-h-screen py-2 bg-primary text-primary'><h1>{loading?'processing':'Sign Up'}</h1><br/>
                <label htmlFor='username'>username</label>
                <input
                    className='p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-secondary'
                    id='username'
                    type='text'
                    value={user.username}
                    onChange={(e)=>setUser({...user,username: e.target.value})}
                    placeholder='username'
                />
                <label htmlFor='email'>email</label>
                <input
                    className='p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-secondary'
                    id='email'
                    type='text'
                    value={user.email}
                    onChange={(e)=>setUser({...user,email: e.target.value})}
                    placeholder='user email'
                />
                <label htmlFor='password'>password</label>
                <input
                    className='p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-secondary'
                    id='password'
                    type='password'
                    value={user.password}
                    onChange={(e)=>setUser({...user,password: e.target.value})}
                    placeholder='Enter your password'
                />
                <button 
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                    onClick={onSignup}>{buttonDisabled? "No Signup": "Sign Up"}</button>
                    <Link href='/login'>Already have an account?</Link>
            </div>
        </>
    );
}