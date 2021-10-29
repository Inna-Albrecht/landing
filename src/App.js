import "./sass/main.scss"

import Footer from "./components/Footer";
import GetMoneySection from "./components/GetMoneySection";
import Header from "./components/Header/index"
import HowWork from "./components/HowWork";
import MakeDiffSection from "./components/MakeDiffSection";
import Navbar from "./components/Navbar"
import SlideShowCs from "./components/SlideShowCs"

import HowWorkDuplicate from "./components/HowWorkDuplicate";
const settings = {
  images: [
    //{ url: require('../assets/images/bg01.jpg'), position: 'center' },
    //{ url: require('../assets/images/bg02.jpg'), position: 'center' },
    //{ url: require('../assets/images/bg03.jpg'), position: 'center' },
    //
    //{ url: require('../assets/images/bg05.jpg'), position: 'flex' },
    { url: './images/bg14.jpg', position: 'center' },
    { url: './images/bg06.jpg', position: 'center' },
    { url: './images/bg04.jpg', position: 'center' },
    { url: './images/bg07.jpg', position: 'center' },
    { url: './images/bg08.jpg', position: 'center' },
    { url: './images/bg09.jpg', position: 'center' },
    { url: './images/bg10.jpg', position: 'center' },
    { url: './images/bg11.jpg', position: 'center' },
    { url: './images/bg12.jpg', position: 'center' },
    { url: './images/bg13.jpg', position: 'center' },
  ],
  // Delay.
  delay: 8000,
};
function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <SlideShow settings={settings} /> */}
      <SlideShowCs settings={settings} />
      <Header />
      <HowWork />
      <GetMoneySection />

      <HowWorkDuplicate />

      <MakeDiffSection />
      <Footer />
    </div>
  );
}

export default App;
