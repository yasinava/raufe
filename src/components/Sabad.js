import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartProjects from "./CartProjects";
import { ShopContext } from "./Context/ShopContextProvider";
import styles from "./styles/Projects.module.css";
import sabad from "./assets/icons/empty-cart.png";

const Sabad = () => {
    const { state, dispatch } = useContext(ShopContext);
  const newData = state.items;
  return (
      <div className={styles.sabadcontainer}>
      <div>
        {newData.length > 0 ? (
            <div>
            <button id={styles.btn} onClick={() => dispatch({ type: "CLEAR" })}>
              منصرف شدم
            </button>
            {/* <button onClick={()=> dispatch({type:"CHECKOUT",}) } >CHECKOUT</button> */}
          </div>
        ) : (
            <Link className={styles.link} to="*">
            برو به صفحه فروش
          </Link>
        )}
      </div>
      <div className={styles.cartContainer}>
        {newData.map((item) => (
            <CartProjects key={item.id} data={item} />
            ))}
      </div>
      <img className={styles.sabad} src={sabad}/>
    
    </div>
  );
};

export default Sabad;
