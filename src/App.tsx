import React from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Howtouse from "./components/Howtouse";
import Limit from "./components/Limit";

function App() {
  return (
    <div style={{ height: "200vh" }}>
      <Header />
      <Banner />
      <Howtouse />
      <Contact />
      <Limit />
      <Footer />
    </div>
  );
}

export default App;
