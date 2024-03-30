import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from "./Page/Login.jsx";
import CreateAccount from './Page/CreateAccount.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter >
            <Routes>
                <Route path={"/"} element={<CreateAccount />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
