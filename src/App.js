import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Product />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
