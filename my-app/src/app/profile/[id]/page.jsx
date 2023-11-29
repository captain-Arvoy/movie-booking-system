"use client"
import { useState } from "react";
import Link from "next/link";
export default function Profile({params}){
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
           <h1 className="mb-4">profile</h1>
           <hr />
           <p 
            class='text-4xl'> profile page <span className="p-2 rounded bg-orange-500 ">{params.id}</span></p> 
        </div>
    );
}