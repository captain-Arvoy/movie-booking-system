"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
export default function ImageSlider(){
    const images = ['https://files.prokerala.com/movies/pics/800/gallery-9208.jpg','https://files.prokerala.com/movies/pics/800/gallery-9208.jpg','https://files.prokerala.com/movies/pics/800/gallery-9208.jpg','https://files.prokerala.com/movies/pics/800/gallery-9208.jpg']
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide)=>(prevSlide+1)%images.length);
        }, 2000);
        return ()=> clearInterval(interval);
    }, [currentSlide,images.length])
    return(
        <>
            <div className="slider-container overflow-hidden w-full max-w-md mx-auto">
                <div>
                    {images.map((image,index)=>{
                        <Image key={index} src={image} alt={`slider`} className="w-full h-auto" />
                    })}
                </div>
            </div>
        </>
    );
}