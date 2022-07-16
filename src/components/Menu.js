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
                <Link to="Dahom"><div>دهم</div></Link>
                <Link to="Yazdahom"><div>یازدهم</div></Link>
                <Link to="Davazdahom"><div>دوازدهم</div></Link>
            </div>
            </div>
        </div>
    );
};

export default Menu;