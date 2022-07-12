import React from 'react';
import logo from './assets/icons/meysam.jpg';
import styles from './styles/Menu.module.css';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div>
            <div className={styles.profile}><Link to="*">
            <img src={logo} alt="logo" />
            </Link>
            <div className={styles.title}>
                <Link to="more"><div>More</div></Link>
                <Link to="movie"><div>Movie</div></Link>
                <Link to="home"><div>Home</div></Link>
            </div>
            </div>
        </div>
    );
};

export default Menu;