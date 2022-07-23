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
                <a href="https://www.instagram.com/ataei_fizik/">
                <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.instagram.com/ataei_fizik/">
                <span>ataei_fizik</span>
                </a>
                <a href='https://wa.me/989392767262'>
                    <img src={whatsApp} alt="whatsApp" />
                </a>
                <a href='https://wa.me/989392767262'>
                     <span>+989392767262</span>
                </a>
            </div>
            </div>
            <div className={styles.about}>
            <h1>میثم عطایی مدرس فیزیک</h1><br/>
            <p>سلام میثم عطایی هستم دانشجو و مدرس فیزیک
            میثم عطایی هستم دانشجو و مدرس فیزیک
                از سال 98 فعالیت خودم رو در حوزه ی ککور تخصصی اغاز کردممیثم عطایی هستم دانشجو و مدرس فیزیک
                از سال 98 فعالیت خودم رو در حوزه ی ککور تخصصی اغاز کردممیثم عطایی هستم دانشجو و مدرس فیزیک
                از سال 98 فعالیت خودم رو در حوزه ی ککور تخصصی اغاز کردممیثم عطایی هستم دانشجو و مدرس فیزیک
                از سال 98 فعالیت خودم رو در حوزه ی ککور تخصصی اغاز کردممیثم عطایی هستم دانشجو و مدرس فیزیک
                از سال 98 فعالیت خودم رو در حوزه ی ککور تخصصی اغاز کردممیثم عطایی هستم دانشجو و مدرس فیزیک
                از سال 98 فعالیت خودم رو در حوزه ی ککور تخصصی اغاز کردم از سال 98 فعالیت خودم رو در حوزه ی ککور تخصصی اغاز کردم
            </p>
            </div>
        </div>
    );
};

export default About;