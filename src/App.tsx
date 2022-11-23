import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Howtouse from "./components/Howtouse";

function App() {
  return (
    <div style={{ height: "200vh" }}>
      <Header />
      <Banner />
      <Howtouse />
    </div>
  );
}

export default App;
