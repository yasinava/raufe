import React from 'react';
import styles from '../styles/About.module.css';
import pic from '../assets/icons/MRmeysam.jpeg'
import instagram from "../assets/icons/instagram-svgrepo-com (2).svg"
import whatsApp from "../assets/icons/whatsapp-svgrepo-com (1).svg"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.picture}>
            <img src={pic} alt="pic"/>
            <div className={styles.connect}>
                <img src={instagram} alt="instagram" />
                <span>ataei_fizik</span>
                <img src={whatsApp} alt="whatsApp" />
                <span>+989999999999</span>
            </div>
            </div>
            <div className={styles.about}>
            <span>میثم عطایی مدرس فیزیک</span><br/>
            <span>dasdasdasdasdasdadasdasaasasdaaasasasasdasdasdasdas</span><br/>
            <span>dasdasdasdasdasdadasdasaasasdaaasasasasdasdasdasdas</span><br/>
            <span>dasdasdasdasdasdadasdasaasasdaaasasasasdasdasdasdas</span><br/>
            <span>dasdasdasdasdasdadasdasaasasdaaasasasasdasdasdasdas</span><br/>
            <span>dasdasdasdasdasdadasdasaasasdaaasasasasdasdasdasdas</span><br/>
            </div>
        </div>
    );
};

export default About;