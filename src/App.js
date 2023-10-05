import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/pages/About';
import Home from './components/pages/Home'
import Ping from "./components/pages/Ping";
import PasswordGenerator from "./components/pages/PasswordGenerator";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ping" element={<Ping />} />
                <Route path="/passwd" element={<PasswordGenerator />} />
            </Routes>
        </div>
    );
}

export default App;
