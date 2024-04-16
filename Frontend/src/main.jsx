import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import DetailProduct from "./page/DetailProduct.jsx";
import Comments from "./component/comments/Comments.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter >
            <Routes>
                <Route path={"/"} element={<Comments currentUserId="1" />} />
                <Route path={"/products/:productID"} element={<DetailProduct />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
