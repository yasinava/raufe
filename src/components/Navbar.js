import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import logo from "./assets/icons/shopping-cart-with-product-inside-svgrepo-com.svg";
const Navbar = () => {
  const [click, setClick] = useState({
    years: false,
  });
  return (
    <div className={styles.container}>
      <div className={styles.sign}>
        <Link to="/signin">SignIn</Link> | <Link to="/login">Login</Link>
      </div>
      <div className={styles.title}>
        <Link to="*">میثم عطایی مدرس فیزیک</Link>
      </div>
      <div className={styles.main}>
        <div
        className={click.years?styles.hoverSelectYears: styles.selectYear}
          onMouseEnter={() => {
            setClick({ years: true });
          }}
          onMouseLeave={() => {
            setClick({ years: false });
          }}
        >
          چندم میخونی؟
        </div>
        {click.years && (
          <div
            className={styles.years}
            onMouseEnter={() => {
              setClick({ years: true });
            }}
            onMouseLeave={() => {
              setClick({ years: false });
            }}
          >
            <Link to="/Dahom">دهم</Link>
            <Link to="/Yazdahom">یازدهم</Link>
            <Link to="/Davazdahom">دوازدهم</Link>
          </div>
        )}
        <div>
          <Link to="/about">درباره من</Link>
        </div>
        <div>
          <Link to="*">صفحه اصلی</Link>
        </div>
        <div>
          <Link to="/sabad">
            <img src={logo} alt="shopin Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
