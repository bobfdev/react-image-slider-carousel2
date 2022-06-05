import { useState } from 'react'
import { imageData } from '../data/carousel-data.js'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import './Carousel.css'

function Carousel() {

    const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className='carousel'>
        <div 
            className="carousel-inner"
            style={{ backgroundImage: `url(${imageData[currentImage].image})` }}
        >
            <div 
                className="left"
                onClick={() => {
                    currentImage > 0 && setCurrentImage(currentImage - 1)
                }}
            >
                <MdArrowBackIos />
            </div>
            <div className="center">
                <h1>{imageData[currentImage].title}</h1>
                <p>{imageData[currentImage].subtitle}</p>
            </div>
            <div 
                className="right"
                onClick={() => {
                    currentImage < imageData.length - 1 && setCurrentImage(currentImage + 1)
                    }}
            >
                <MdArrowForwardIos />
            </div>
        </div>
    </div>
  )
}

export default Carousel