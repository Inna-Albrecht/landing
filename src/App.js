import "./sass/main.scss"

import Footer from "./components/Footer";
import GetMoneySection from "./components/GetMoneySection";
import Header from "./components/Header"
import HowWork from "./components/HowWork";
import MakeDiffSection from "./components/MakeDiffSection";
import Navbar from "./components/Navbar"
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HowWork/>
      <GetMoneySection/>
      <MakeDiffSection/>
   <Footer/>
    </div>
  );
}

export default App;
