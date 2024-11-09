// import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import Cn from './camnangdulich';
import Banner from './Banner';

import 'aos/dist/aos.css'; // Import CSS của AOS
import { useEffect } from 'react';
import Aos from 'aos';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lienhe from './lienhe';
import Phong from './phong';
import DV from './dv';
import Home from './home';
import ChiTiet from './ChiTiet';
import CT from './ct';
import Thich from './yeuthich';
import Cart from './cart';
// import Cn from './1';
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Thời gian của hiệu ứng
      once: true, // Chỉ chạy hiệu ứng một lần
    });
  }, []);
  return (
    <BrowserRouter>
        <div className="container">
            {<header><Header /></header>}
            <main>
                <article className="blog-page-wrapper">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/trangchu" element={<Home/>}/>
                        <Route path="/Banner" element={<Banner />} />
                        <Route path="/lienhe" element={<Lienhe/>} />
                        <Route path="/dichvu" element={<DV/>} />
                        <Route path="/phong" element={<Phong/>} />
                        <Route path="/cn" element={<Cn/>} />
                        <Route path="/phong/:id" element={<ChiTiet/>} />
                        {/* <Route path="chitiet" element={<ChiTiet/>} /> */}
                        <Route path="yeuthich" element={<Thich/>} />
                        <Route path="cart" element={<Cart/>} />
                    </Routes>
                </article>
            </main>
            <footer><Footer /></footer>
        </div>
    </BrowserRouter>

);
}

export default App;
