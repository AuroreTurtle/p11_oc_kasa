import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home/Home.jsx";
import Accomodation from "./pages/Accomodation/Accomodation";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route 
                path="/accomodation/:id" 
                render={(props) => <Accomodation {...props} />}
                element={<Accomodation />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
