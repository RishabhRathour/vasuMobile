import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Services = () => {
  return (
    <div className="services">
      <Carousel
      infiniteLoop
      autoplay
      showStatus={false} 
      showArrows={false}
      interval={1000}
        
        >
        <div>
          <img src={"https://images.pexels.com/photos/1388947/technology-telephone-mobile-smart-1388947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Item1" />
          <p className="legend"> Secreen Repair</p>
        </div>
        <div>
          <img src={"https://images.pexels.com/photos/13625784/pexels-photo-13625784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Item2" />
          <p className="legend">Battery Replacement</p>
        </div>

        <div>
          <img src={"https://images.pexels.com/photos/6755053/pexels-photo-6755053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Item" />
          <p className="legend">Camera Replacement</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services