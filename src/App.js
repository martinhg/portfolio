import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './assets/css/global.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      {/* <Technologies />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
