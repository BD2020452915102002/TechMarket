import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AuthProvider} from "./utils/AuthContext.jsx";
import AppRouters from "./routes/AppRouters.jsx";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
               <AppRouters/>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>,
)
