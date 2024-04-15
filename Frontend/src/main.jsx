import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import  Home from "./page/Home.jsx";
import DetailProduct from "./page/DetailProduct.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter >
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/products/:productID"} element={<DetailProduct/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
