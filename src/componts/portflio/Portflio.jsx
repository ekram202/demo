import "./portflio.css";
import port2 from "../../assets/port2.png";
import poert1 from "../../assets/poert1.png";
import port3 from "../../assets/port3.png";
import React, { useState } from 'react';


export default function Portflio() {

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [port2,poert1,port3,port2,poert1,port3];

  const openLightbox = (src) => {
    setCurrentImage(src);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage('');
  };

  return (
    <>

<div className="portflio">
       <h1>PORTFOLIO COMPONENT</h1>
       <div className="line2">
         <div className="line"></div>
         <i className="fas fa-star star"></i>
         <div className="line"></div>
       </div>
    <div className=" ">
      <div className=" gap-4 p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        {images.map((src, index) => (
          <div className="relative img1  ">
              <div className="overlay">
              <i class="fa-solid fa-plus"></i>
            </div>
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto cursor-pointer  "
            onClick={() => openLightbox(src)}
          />
          </div>
          
        )
        )}

       
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative w-4/5 h-4/5 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${currentImage})` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {isLightboxOpen && <div className="blur-background fixed inset-0 bg-black bg-opacity-50 z-40" />}
    </div>
    </div>
    </>
  );
};

  
  // return (
  //   <div className="portflio">
  //     <h1>PORTFOLIO COMPONENT</h1>
  //     <div className="line2">
  //       <div className="line"></div>
  //       <i className="fas fa-star star"></i>
  //       <div className="line"></div>
  //     </div>
  //     <div className="imgs">
  //       <div className="img1">
  //         <img src={port2} alt="port2" />
         
  //       </div>

  //       <div className="img1">
  //         <img src={port3} alt="port3" />
  //         <div className="overlay">
  //           <i class="fa-solid fa-plus"></i>
  //         </div>
  //       </div>

  //       <div className="img1">
  //         <img src={poert1} alt="poert1" />
  //         <div className="overlay">
  //           <i class="fa-solid fa-plus"></i>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="imgs">
  //       <div className="img1">
  //         <img src={port2} alt="port2" />
  //         <div className="overlay">
  //           <i class="fa-solid fa-plus"></i>
  //         </div>
  //       </div>

  //       <div className="img1">
  //         <img src={port3} alt="port3" />
  //         <div className="overlay">
  //           <i class="fa-solid fa-plus"></i>
  //         </div>
  //       </div>

  //       <div className="img1">
  //         <img src={poert1} alt="poert1" />
  //         <div className="overlay">
  //           <i class="fa-solid fa-plus"></i>
  //         </div>
  //       </div>
  //     </div>

  //     <div id="lightboxcontainer" className="lightboxcontainer hidden">
  //       <div id="lightbox" className="lightbox">
  //         <div className="close"></div>
  //       </div>
  //     </div>
  //   </div>
  // );

