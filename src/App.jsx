import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Alert from "./components/alert/Alert";

const App = () => {
  const [alert, setAlert] = useState({ show: false });

  const handleALert = () => {
    setAlert({ show: true });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };
  return (
    <>
      {alert.show && <Alert />}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact handleALert={handleALert} />
      <Footer />
    </>
  );
};

export default App;
