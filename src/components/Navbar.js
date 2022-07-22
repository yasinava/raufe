import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/Navbar.module.css"
import logo from "./assets/icons/shopping-cart-with-product-inside-svgrepo-com.svg";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>میثم عطایی مدرس فیزیک</div>
              
            <div className={styles.connect}>
                <Link className={styles.me} to="about" >درباره ی من</Link>
                <div className={styles.signLog}>
                    <Link to="signin">ثبت نام</Link> 
                    | <Link to="login">ورود</Link>
                </div>
                <Link to="sabad">
                <div className={styles.sabadLogo}><img src={logo} alt="logo"/></div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;