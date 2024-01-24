import React, { useState } from 'react';


import Card from "../component/Card";
import Isimm from '../images/Isimm.jpg';
import Equipe from '../images/Equipe.jpg';
import Calendar from 'react-calendar';

function PresentationGenerale() {
  return (
    <div className="mt-10 flex flex-col ml-6 items-left">
      <h1 className="text-xl uppercase text-sky-600 font-medium  ml-4 mb-4">
        Bienvenu dans notre équipe de recherche s2m-nanotech
      </h1>

      <div className="flex flex-col pl-4 items-left">
        
          <p className="w-full max-w-screen-md mb-4 text-black text-left line-clamp-6">
            L’équipe s2m-nanotech est une équipe de recherche installée à l’Institut Supérieur d’Informatique et de Mathématiques de Monastir (Université de Monastir, Tunisie). C’est une équipe multidisciplinaire qui est composée de physiciens, de chimistes et d’électroniciens. Par ailleurs, des compétences multi- et inter-disciplinaires sont présentes dans l’équipe ce qui permet de développer plusieurs axes de recherche à la fois à aspects fondamentaux et à aspects appliqués. La richesse des thèmes de recherche développés au sein de notre équipe ont permis d’apporter des collaborations nationales et internationales.
          </p>
          
        
        
        <div className="pb-8">
          <Card />
        </div>
        
      </div>
    </div>
  );
}

export default PresentationGenerale;



