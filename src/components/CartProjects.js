import React from "react";
import styles  from "./styles/CartProject.module.css";

const CartProjects = ({ data }) => {

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.image.logo} alt="pic"  />
      </div>
      <div className={styles.text}>
        <h1>{data.title}</h1>
        <div className={styles.buttons}>
        <a className={styles.buttonsVisit} href={data.link}>visit</a>
        </div>
      </div>
    </div>
  );
};

export default CartProjects;
