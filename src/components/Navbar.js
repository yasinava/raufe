import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>hello world im im rauf yasin meysam</div>
            <div className={styles.connect}>
                <Link to="about" >About and Connect</Link>
                <div className={styles.signLog}>
                    <Link to="signin">Sign In</Link> | <Link to="login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;