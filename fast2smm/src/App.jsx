// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body text-text">
      <Navbar />
      <Header />
      <Services />
      <TargetAudience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;