import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";

import DuasPage from "./Pages/DuasPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/duas-importance" element={<DuasPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;