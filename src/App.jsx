import Topbar from "./components/topbar/Topbar.jsx";
import Menu from "./components/menu/Menu.jsx";
import Contact from "./components/contacts/Contacts.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Intro from "./components/intro/Intro.jsx";

import Portfolio from "./components/portfolio/Portfolio.jsx";


import "./App.scss";
import "./global.scss";
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     <Intro />
     <Portfolio />
     
     <Testimonials/>
       <Contact/>
       </div>
     </div>
    
  );
}

export default App;