const { images } = require("../../../next.config");

function ImageSlider(){
    return(
        <>
            const [currentSlide, setCurrentSlide] = useState(0);
            {/* const images = ['Image','Image','Image'] */}
            useEffect(() => {
                const interval = setInterval(() => {
                    setCurrentSlide((prevSlide)=>(prevSlide+1)%images.length);
                }, 2000);
                return ()=> clearInterval(interval);
            }, [currentSlide,images.length]
            return (
                <div className="slider-container overflow-hidden w-full max-w-md mx-auto">
                    <div>
                        {images.remotePatterns((image,index)=>{
                            <img key={index} src={image} alt={`slider`} className="w-full h-auto" />
                        })}
                    </div>
                </div>
            );
            )
        </>
    );
}
export default ImageSlider;