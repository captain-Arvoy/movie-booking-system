"use client"
import { useState } from "react";
import Link from "next/link";
export default function Profile({props}){
    
    return(
        <>
            <div className="fixed right-0 top-0 h-3/6 bg-gray-800 w-56 p-8 rounded-l-2xl  translate-y-1/2">
                <nav className="mt-4 text-white">
                    <Link href="/orders">Your orders</Link><br/>
                    <Link href="/logOut">Logout</Link><br/>
                </nav>
            </div>
        </>
    );
}