import { useState } from "react";

import "./App.css";

import Header from "./components/header/Header";
import Objectives from "./components/objectives/Objectives";
import SimpleFooter from "./components/footer/footer";

import ChooseUs from "./components/chooseus/ChooseUs";

import Review from "./components/review/Review";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <div>
        <Header />
        <Review />
        <Objectives />
        <ChooseUs />
        <Contact />
        <SimpleFooter />
      </div>
    </>
  );
}

export default App;
