import React from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Howtouse from "./components/Howtouse";

function App() {
    return (
        <div style={{ height: "200vh" }}>
            <Header />
            <Banner />
            <Howtouse />
            <Contact />
        </div>
    );
}

export default App;
