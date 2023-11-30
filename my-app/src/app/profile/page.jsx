"use client"
import Link from "next/link";
import axios from "axios"
import {useRouter} from 'next/navigation'
export default function Profile(){
    const router = useRouter()
    const onLogout = async()=>{
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error) {
            console.log(error.message)
        }
    }    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
           <h1 className="mb-4">profile</h1>
           <hr />
           <p>profile page</p>
           <button 
                onClick={onLogout}
                className="border-black p-4 rounded font-bold text-secondary hover:bg-green-500 hover:border-black hover:text-secondary"
            >Logout</button>
        </div>
    );
}