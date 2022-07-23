import React, { useContext, useState } from "react";
import styles from "./styles/CartProject.module.css";
import { ShopContext } from "./Context/ShopContextProvider";
import { isInCart } from "./helper/Funcktions";

const CartProjects = ({ data }) => {
  const { state, dispatch } = useContext(ShopContext);
  const [clickHandler, setClickHandler] = useState({
    color: false,
  });


  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.image} alt="pic" />
      </div>
      <div className={styles.text}>
        <h1>{data.title}</h1>
        <div className={styles.textButtons}>
          <div>{data.price}</div>
          <div className={styles.buttons}>
            <div className={clickHandler.color ? styles.redButton: styles.greenButton}>

            {isInCart(state, data.id) ? (
              <button
              onClick={() => dispatch({ type: "REMOVEITEM", payload: data })}
              onMouseUp={() => {
                  setClickHandler({ color: false });
                }}
              >
                حذف
              </button>
            ) : (
              <button
                onClick={() => dispatch({ type: "ADDITEM", payload: data })}
                onMouseUp={() => {
                  setClickHandler({ color: true });
                }}
                >
                خرید
              </button>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProjects;
