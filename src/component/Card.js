import React from 'react'
import{ useState } from 'react';

import Location from '../images/Location.png';
import Isimm from '../images/Isimm.jpg';


function Card() {

const [displayText, setDisplayText] = useState(false);

 const handleImageClick = () => {
    
    const googleMapsURL = "https://www.google.com/maps/place/Institut+Sup%C3%A9rieur+d'Informatique+et+de+Math%C3%A9matiques+de+Monastir/@35.764446,10.840737,15z/data=!4m6!3m5!1s0x130212d6df016097:0x528cc1e524eece77!8m2!3d35.7644464!4d10.8407374!16s%2Fg%2F1218f5gc?hl=fr-FR&entry=ttu";
    window.open(googleMapsURL, '_blank');
  };

  return (
    <div className='flex flex-row pt-4'>
      <div className='relative w-50 mx-auto cursor-pointer' onClick={handleImageClick}
        onMouseEnter={() => setDisplayText(true)}
        onMouseLeave={() => setDisplayText(false)}>
        {displayText && (
          <div className="absolute bg-gray-100 text-sky-600 p-2 rounded">
            Agrandir le plan
          </div>
        )}
        <img 
          src={Location} 
          alt="/"
        />
      </div>
      <img className='w-25 mx-auto ml-0 pl-0' src={Isimm} alt="/" />
    </div>
  );
}

export default Card;