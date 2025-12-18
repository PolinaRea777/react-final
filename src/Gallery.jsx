import { data } from "./data";
import React from "react";

import { useState } from "react";


function Gallery() {

 const [gallery, setGallery] = useState(data);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [isOpen, setIsOpen] = useState(false);

  const filteredImages = gallery.filter((item) => {
    if(selectedCategory === "all")
    return true;
    return item.genre === selectedCategory
  })

    return (
     <div>
        <div className="header"> 
            <h1 className="gallery-header">Welcome To Veredian Arts</h1>
        </div>
        <div className='main-container'>

      <div className='filter-bar'>
        <button 
        onClick={() => setIsOpen(!isOpen)}
        className='btn-category'>Category {isOpen ? '↑' : ''} </button>

        {isOpen && (
          <div className='dropdown-menu'>
              <div onClick={() => {setSelectedCategory ('all');
                setIsOpen(false)
              }}> All
              </div>

          <div onClick={() => {setSelectedCategory ('nature');
                setIsOpen(false)
              }}> Nature
              </div>

          <div onClick={() => {setSelectedCategory ('people');
                setIsOpen(false)
              }}> People
              </div>

          <div onClick={() => {setSelectedCategory ('abstraction');
                setIsOpen(false)
              }}> Abstraction

              </div>

          <div onClick={() => {setSelectedCategory ('city');
                setIsOpen(false)
              }}> City

              </div>
          
          <div onClick={() => {setSelectedCategory ('animals');
                setIsOpen(false)
              }}> Animals

              </div>
            
          </div>
        )}
      </div>

      <div className='content-wrapper'>

        {filteredImages.map((element) =>{
          const {id, image, price} = element;
        return <div key={id}>
            <div className='image-card' key={id}>
          <img src={image} width={300} height={400}/>

        <div className='info-tooltip'>
        
        {/* <p className='tooltip-genre'>Жанр: {genre}</p> */}
        <p className='tooltip-price'>{price}</p>
    </div>

          
          </div>
          </div>})}
      

      </div>
    </div>

     </div>
)}


export default Gallery;