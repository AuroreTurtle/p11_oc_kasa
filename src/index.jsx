import { React, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home/Home.jsx";
import Accomodation from "./pages/Accomodation/Accomodation";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ScrollToTop />
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
