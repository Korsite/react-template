import React from 'react'
import ReactDOM from 'react-dom/client'
import {LandingPageApp} from "./LandingPageApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <LandingPageApp/>
        </BrowserRouter>
    </React.StrictMode>
)
