import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel"
import Item from '@/app/components/Item'
export default function ImageSlider(){
    const [images, setImages] = useState([])
    useEffect(()=>{
        setImages(['/Image1.jpg','/Image2.jpg','/Image3.jpg']);
    },[]);
    return(
        <>
            <Carousel>
                {images.map((item,index)=>{
                    <Item key={index} item={item} />
                })}
                
            </Carousel>
        </>
    );
}