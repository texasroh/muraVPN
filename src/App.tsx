import React, { useRef } from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Howtouse from "./components/Howtouse";
import Limit from "./components/Limit";

function App() {
  const bannerRef = useRef<null | HTMLElement>(null);
  const howRef = useRef<null | HTMLElement>(null);
  const conRef = useRef<null | HTMLElement>(null);
  const onLogoClick = () => {
    bannerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onHowClick = () => {
    window.scrollTo({
      top: howRef.current!.offsetTop - 50,
      behavior: "smooth",
    });
    // howRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onConClick = () => {
    window.scrollTo({
      top: conRef.current!.offsetTop - 50,
      behavior: "smooth",
    });
    // conRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{ height: "200vh" }}>
      <Header
        onLogoClick={onLogoClick}
        onHowClick={onHowClick}
        onConClick={onConClick}
      />
      <Banner ref={bannerRef} />
      <Howtouse ref={howRef} />
      <Contact ref={conRef} />
      <Limit />
      <Footer />
    </div>
  );
}

export default App;
