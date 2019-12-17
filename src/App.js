import React from 'react';
import Header from './components/header/Header'
import Player from './components/player/Player'
import Footer from './components/footer/Footer'
import MainSection from './components/main-section/MainSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
