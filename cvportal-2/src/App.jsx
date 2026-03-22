import { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import "./index.css";

function App() {
    const [easterActive, setEasterActive] = useState(
        localStorage.getItem("easterEggBackground") === "true",
    );

    const [showModal, setShowModal] = useState(false);
    const secretCode = ["9", "5", "9", "5"];
    const inputRef = useRef([]);

    useEffect(() => {
        if (easterActive) document.body.classList.add("easter-bg");
        else document.body.classList.remove("easter-bg");
    }, [easterActive]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            inputRef.current.push(e.key);
            if (inputRef.current.length > secretCode.length)
                inputRef.current.shift();

            if (inputRef.current.join("") === secretCode.join("")) {
                setShowModal(true);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const toggleEaster = () => {
        const newState = !easterActive;
        setEasterActive(newState);

        if (newState) localStorage.setItem("easterEggBackground", "true");
        else localStorage.removeItem("easterEggBackground");
    };
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home toggleEaster={toggleEaster} />}
                />
                <Route
                    path="/about-me"
                    element={<AboutMe toggleEaster={toggleEaster} />}
                />
                <Route
                    path="/cv"
                    element={<CV toggleEaster={toggleEaster} />}
                />
                <Route
                    path="/portfolio"
                    element={<Portfolio toggleEaster={toggleEaster} />}
                />
            </Routes>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span
                            className="close-btn"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </span>
                        <p>🎉 Surprise! You found an easter egg!</p>
                    </div>
                </div>
            )}

            <Footer />
        </Router>
    );
}

export default App;
