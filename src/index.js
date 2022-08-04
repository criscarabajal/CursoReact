import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListConteiner from './components/ItemListConteiner';
import App from './App';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<App />}>
        {/* <Route index element={<ItemListConteiner />} /> */}
        {/* <Route path='Productos' element={<ItemListConteiner />} />
        <Route path='Productos/:id' element={<ItemDetailContainer />} />
        <Route path='Informacion' element={<div>Informacion</div>} />
        <Route path='Contacto' element={<div>Contacto</div>} />
         */}
        
      
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/:categoryId" element={<ItemListConteiner />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path='Cart' element={<Cart />} />
    
      </Route>

    </Routes>

    
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
