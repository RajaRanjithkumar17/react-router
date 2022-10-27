import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home.js';
import Menu from './Menu.js';
import Notice from './Notice';

function Routerscomp (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='menu' element={<Menu />}></Route>
      <Route path='notice' element={<Notice />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Routerscomp />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
