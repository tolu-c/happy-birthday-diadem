import React from "react";

// images
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpeg'
import image3 from '../assets/3.jpeg'
import image4 from '../assets/4.jpeg'
import image5 from '../assets/5.jpeg'
import image6 from '../assets/6.jpeg'
import image7 from '../assets/7.jpeg'
import image8 from '../assets/8.jpeg'
import image9 from '../assets/9.jpeg'

function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-3 md:gap-4 p-4 md:max-h-3/4">
      <div className="w-auto h-auto md:col-span-2">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image4} />
      </div>
      <div className="w-auto h-auto md:row-span-2">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image1} />
      </div>
      <div className="w-auto h-auto md:row-span-2">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image3} />
      </div>
      <div className="w-auto h-auto md:row-span-2">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image5} />
      </div>
      <div className="w-auto h-auto">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image7} />
      </div>
      <div className="w-auto h-auto md:row-span-2">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image8} />
      </div>
      <div className="w-auto h-auto md:col-span-2">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image2} />
      </div>
      <div className="w-auto h-auto">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image6} />
      </div>
      <div className="w-auto h-auto md:col-span-2">
          <img alt='temi pictures' className='object-cover w-full h-full' src={image9} />
      </div>
    </div>
  );
}

export default Gallery;
