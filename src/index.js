import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/root.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import reportWebVitals from "./reportWebVitals";
import Header from "./components/layout/Header/Header";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Header/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);

reportWebVitals();