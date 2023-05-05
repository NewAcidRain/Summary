import React from "react";
import './styles/main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./pages/Start";
import Description from "./pages/Description";
import Functional from "./pages/Functional";


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>} />
                <Route path="/description" element={<Description/>} />
                <Route path="/functional" element={<Functional/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
