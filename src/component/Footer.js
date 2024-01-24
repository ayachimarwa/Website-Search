import React from 'react';

function Footer() {
  return (
    <div className="text-xxs text-primary-tint text-black tracking-widest font-light py-2 static bottom-0 left-0 w-full bg-neutral-100">
      <ul className='flex justify-between items-center  px-8'>
          <li className='py-2 text-sm'>E-mail: mohamed.khalfaouitn@gmail.com</li>
          <li className='py-2 text-sm'>Address: Avenue de la Corniche, Monastir 5000 Tunisie</li>
      </ul>
    
      <div className='text-center py-1 text-sm'>
          Ayachi Marwa <span>&copy;</span> 2024 All rights reserved
      </div>
    </div>
  );
}

export default Footer;