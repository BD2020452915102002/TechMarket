import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import CreateAccount from './Page/CreateAccount.jsx';
import Login from "./Page/Login.jsx";
import App from "./Page/App.jsx";
import {Home} from "./Page/Home.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter >
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
