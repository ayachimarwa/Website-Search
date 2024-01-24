import React from "react";
import  { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import classnames from 'classnames';
import {Link, useNavigate } from 'react-router-dom';


function NavbarMenu() {
    const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
};
    
  return (
    <div className='w-full h-2O flex justify-between items-center px-8 text-black'>
        <div className="flex items-center ">
            <img src="https://s2m-nanotech-isimm.org/wp-content/uploads/2020/11/cropped-sigle-s2m-7.png"   alt="équipe de recherche" className='w-24 h-24 mt-5'/>
            <div className='block '>
                <h1 className='text-3xl  capitalize  font-bold text-black ml-5'>équipe de recherche</h1>
                <p className='ml-5 text-black '>S2M-NanoTech</p>
            </div>
        </div>
         
        
        <ul className='flex items-center'>
            <li className='p-4'>
                <Menu>
                    <Menu.Item>
                        {({ active }) => (
                            <Link 
                                 to="/" 
                                 className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}  
                                 onClick={() => handleItemClick("acceuil")}
                            >
                              Accueil
                            </Link>
                        )}
                    </Menu.Item>
                </Menu>
                
            </li>
            <li className='p-4'>
                <Menu  as='div' className='relative inline-block text-left'>
                    <Menu.Button className='hover:bg-gray-100 focus:bg-gray-100 px-4 py-2'>
                        Présentation
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-100'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items  className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                            <Menu.Item>
                                {({ active }) => (
                                <Link
                                    to='/presentationGenerale'  
                                    className={classnames(
                                        active ? 'bg-gray-100 text-gray-900' 
                                        : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    )}
                                    onClick={() => handleItemClick("Presentation/PresentationGenerale")}

                                >
                                       Présentation générale
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to='/InformatiquePratique'  
                                        className={classnames(
                                            active ? 'bg-gray-100 text-gray-900' 
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Information pratique
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </li>
            <li className='p-4'>
                 <Menu  as='div' className='relative inline-block text-left'>
                    <Menu.Button className='hover:bg-gray-100 focus:bg-gray-100 px-4 py-2'>
                        Recherche
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-100'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items  className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='/Theme-recherche'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                         <Menu  as='div' className='relative inline-block text-left'>
                                            <Menu.Button>
                                                Thème de recherche
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter='transition ease-out duration-100'
                                                enterFrom='transform opacity-0 scale-95'
                                                enterTo='transform opacity-100 scale-100'
                                                leave='transition ease-in duration-100'
                                                leaveFrom='transform opacity-100 scale-100'
                                                leaveTo='transform opacity-0 scale-95'
                                            >   
                                                <Menu.Items  className='origin-top-left absolute left-40 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                 href='Recherche/Theme-recherche/Materiaux-innovants'
                                                                className={classnames(
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                           Matériaux innovants
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href='Recherche/Theme-recherche/Capteurs-et-bio-capteurs'
                                                                className={classnames(
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Capteurs et bio-capteurs
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href='Recherche/Theme-recherche/Ingenierie-des-composants'
                                                                className={classnames(
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                               Ingénierie des composants
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                       
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                            <a
                                                href='Recherche/Publication'
                                                className={classnames(
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                                )}
                                            > 
                                                <Menu  as='div' className='relative inline-block text-left'>
                                                    <Menu.Button>
                                                        Publication
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter='transition ease-out duration-100'
                                                        enterFrom='transform opacity-0 scale-95'
                                                        enterTo='transform opacity-100 scale-100'
                                                        leave='transition ease-in duration-100'
                                                        leaveFrom='transform opacity-100 scale-100'
                                                        leaveTo='transform opacity-0 scale-95'
                                                    >   
                                                    <Menu.Items  className='origin-top-left absolute left-40 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='/ArticleSientific'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Articles scientifiques
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Recherche/Publication/Communications'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Communications
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Recherche/Publication/Theses'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Thèses
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href='Recherche/Publication/Masteres'
                                                                        className={classnames(
                                                                        active
                                                                            ? 'bg-gray-100 text-gray-900'
                                                                            : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        Mastères(mémoires)
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </a>
                                )}
                                
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Recherche/Collaborations'
                                        className={classnames(
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                        )}
                                    > 
                                        Collaborations
                                    </a>
                                )}
                               
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </li>
            <li className='p-4'>
                <Menu  as='div' className='relative inline-block text-left'>
                    <Menu.Button className='hover:bg-gray-100 focus:bg-gray-100 px-4 py-2'>
                         Enseignements
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-100'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items  className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Enseignements/Cycle-Ingenieurs'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                    > 
                                        Cycle Ingénieurs
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Enseignements/Masteres'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                    > 
                                        <Menu  as='div' className='relative inline-block text-left'>
                                                    <Menu.Button>
                                                        Mastères
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter='transition ease-out duration-100'
                                                        enterFrom='transform opacity-0 scale-95'
                                                        enterTo='transform opacity-100 scale-100'
                                                        leave='transition ease-in duration-100'
                                                        leaveFrom='transform opacity-100 scale-100'
                                                        leaveTo='transform opacity-0 scale-95'
                                                    >   
                                                    <Menu.Items  className='origin-top-left absolute left-40 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Enseignements/Masteres/Micro-électronique&instrumentation'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Micro-électronique & instrumentation
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Enseignements/Masteres/MastèresChimie-SRCO&SPCM'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                   Mastères Chimie: SRCO & SPCM
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Enseignements/Masteres/Logiciels-modélisation&simulation-moléculaire'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Logiciels de modélisation et simulation moléculaire
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Enseignements/Licences'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                    > 
                                        <Menu  as='div' className='relative inline-block text-left'>
                                                    <Menu.Button>
                                                        Licences
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter='transition ease-out duration-100'
                                                        enterFrom='transform opacity-0 scale-95'
                                                        enterTo='transform opacity-100 scale-100'
                                                        leave='transition ease-in duration-100'
                                                        leaveFrom='transform opacity-100 scale-100'
                                                        leaveTo='transform opacity-0 scale-95'
                                                    >   
                                                    <Menu.Items  className='origin-top-left absolute left-40 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Enseignements/Licences/Licence-prothese-dentaire'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Licence prothèse dentaire
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Enseignements/Licences/Licence-Physiotherapie'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Licence Physiotherapie
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href='Enseignements/Licences/Autres'
                                                                    className={classnames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Autres
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
              
            </li>
            <li className='p-4'>
                                <Menu  as='div' className='relative inline-block text-left'>
                    <Menu.Button className='hover:bg-gray-100 focus:bg-gray-100 px-4 py-2'>
                          Offres Stages/Thèses
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-100'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items  className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Offres-Stages-Theses/Propositions-PFEs'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                    > 
                                        Propositions de PFEs
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Offres-Stages-Theses/Propositions-stages-masteres'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                    > 
                                   Propositions de stages de mastères
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Offres-Stages-Theses/Propositions-theses'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                    > 
                                     Propositions de thèses
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='Offres-Stages-Theses/Divers'
                                        className={classnames(
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                         )}
                                    > 
                                     Divers
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
               
            </li>
        </ul>
    </div>
    
    
    
  );
}

export default NavbarMenu;