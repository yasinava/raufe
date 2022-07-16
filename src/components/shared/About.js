import React from 'react';
import styles from '../styles/About.module.css';
import pic from '../assets/icons/MRmeysam.jpeg'
const About = () => {
    return (
        <div className={styles.container}>
            <h1>میثم عطایی مدرس فیزیک</h1>
            <img src={pic} />
        </div>
    );
};

export default About;