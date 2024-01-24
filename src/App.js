import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavbarMenu from "./component/NavbarMenu";
import Acceuil from "./pages/Acceuil";
import PresentationGenerale from "./pages/PresentationGenerale";
import InformatiquePratique from "./pages/InformatiquePratique";
import ArticleSientific from "./pages/ArticleSientific";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
       <Router>
          <NavbarMenu />
          <Routes>
            <Route path="/" exact element={<Acceuil/>}/>
            <Route path="presentationGenerale" element={<PresentationGenerale />} />
            <Route path="InformatiquePratique" element={<InformatiquePratique />} />
            <Route path="ArticleSientific" element={<ArticleSientific />} />
          </Routes>
          <Footer/>
      </Router>
    </div>
      
    
  );
}

export default App;
