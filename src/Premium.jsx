import { useState } from "react";
import pic from "./pic.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";



const pictures = [
    {

        id: 1,
        type: "premium",
        price: "Contact us for the details",
        image: pic
    },

    {

        id: 2,
        type: "premium",
        price: "Contact us for the details",
        image: pic2
    },

    {

        id: 3,
        type: "premium",
        price: "Contact us for the details",
        image: pic3
    },

    {

        id: 4,
        type: "premium",
        price: "Contact us for the details",
        image: pic4
    },

      {

        id: 5,
        type: "premium",
        price: "Contact us for the details",
        image: pic5
    }

    ]

function Premium() {

    
    
const [exclusivePic, setExclusivePic] = useState(pictures);

    return <div className='content-wrapper'>
        
        {exclusivePic.map((element) => {
            const {id, type, price, image} = element;
            return <div key={id}>
            <div className='image-card' key={id}>
          <img src={image} width={300} height={400}/>
          <div className='info-tooltip'>
        
        {/* <p className='tooltip-genre'>Жанр: {genre}</p> */}
        <p className='tooltip-price'>{price}</p>
    </div>

          </div>
          </div>
        })}

        </div>
        
    
}

export default Premium;