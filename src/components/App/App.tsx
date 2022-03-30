import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Homepage from "../../pages/Homepage/Homepage";
import NotFound from "../../pages/NotFound/NotFound";
import Projects from "../../pages/Projects/Projects";
import Footer from "../Footer/Footer";
import { Body } from "../Global/GlobalComponents";
import Header from "../Header/Header";

function PageRouter() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastContainer />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Body>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </Body>
  );
}

export default App;
