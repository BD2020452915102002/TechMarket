import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AuthProvider} from "./utils/AuthContext.jsx";
import AppRouters from "./routes/AppRouters.jsx";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
               <AppRouters/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
