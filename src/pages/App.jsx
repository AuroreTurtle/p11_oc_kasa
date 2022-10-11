import { React, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Accomodation from "./Accomodation/Accomodation";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";
import About from "./About/About";
import Error from "./Error/Error";

/**
 * When the pathname changes, scroll to the top of the page.
 * @returns null
 */
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accomodation/:id" element={<Accomodation />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
