import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouters from "./routes/AppRouters.jsx";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store, {persistor} from "../src/store/store.js";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
               <AppRouters/>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)
