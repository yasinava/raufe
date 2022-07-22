import React, { useContext } from "react";
import styles from "./styles/CartProject.module.css";
import { ShopContext } from "./Context/ShopContextProvider";
import { isInCart } from "./helper/Funcktions";

const CartProjects = ({ data }) => {
  const { state, dispatch } = useContext(ShopContext);
 
  console.log(state);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.image.logo} alt="pic" />
      </div>
      <div className={styles.text}>
        <h1>{data.title}</h1>
        <div className={styles.buttons}>
          <div>{data.price}</div>
          <div>

          {isInCart(state, data.id)? (
            <button
            onClick={() => dispatch({ type: "REMOVEITEM", payload: data })}
            >
              حذف
            </button>
          ) : (
            <button
            onClick={() => dispatch({ type: "ADDITEM", payload: data })}
            >
              افزودن
            </button>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};



export default CartProjects;
