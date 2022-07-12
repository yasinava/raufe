import React from 'react';
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import About from "./shared/About";
import Hamburger from "./shared/Hamburger";
import Home from "./shared/Home";
import More from "./shared/More";
import Movie from "./shared/Movie";
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
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="more" element={<More />} />
          <Route path="movie" element={<Movie />} />
        </Routes>
        </div>
      </div>
    );
};

export default LandingPage;