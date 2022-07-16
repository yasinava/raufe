import React from 'react';
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import About from "./shared/About";
import Hamburger from "./shared/Hamburger";
import Dahom from './shared/Dahom';
import Yazdahom from './shared/Yazdahom';
import Davazdahom from './shared/Davazdahom';
import Projects from "./Projects";
import styles from "./styles/LandingPage.module.css"

const LandingPage = () => {
    return (
        <div className={styles.container}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.main}>
        <Navbar />
        <Routes>
          <Route path='*' element={<Projects />}/>
          <Route path="hamburger" element={<Hamburger />} />
          <Route path="Davazdahom" element={<Davazdahom />} />
          <Route path="about" element={<About />} />
          <Route path="Dahom" element={<Dahom />} />
          <Route path="Yazdahom" element={<Yazdahom />} />
        </Routes>
        </div>
      </div>
    );
};

export default LandingPage;