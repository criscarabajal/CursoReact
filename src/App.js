import React from 'react';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import {CartProvider} from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
