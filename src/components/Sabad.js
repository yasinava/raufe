import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import CartProjects from './CartProjects';
import { ShopContext } from './Context/ShopContextProvider';
import styles from './styles/Sabad.module.css';
import sabad from "./assets/icons/empty-cart.png";
import donShop from "./assets/icons/done-shop.png"
const Sabad = () => {
const {state , dispatch} = useContext(ShopContext);
const newData = state.items;
const checked = state.checkout;
    return (
        <div className={styles.container}>
            <div>{newData.length>0 ?<div className={styles.buttons}>
                <button onClick={()=> dispatch({type:"CLEAR",}) } >CLEAR</button>
                <button onClick={()=> dispatch({type:"CHECKOUT",}) } >CHECKOUT</button>
            </div>:
            <Link to="*" >
            <div className={styles.backHome}>
                go to shop
            </div>
            </Link>
                }
            </div>
        <div className={styles.cartContainer}>
            {newData.map(item => <CartProjects key={item.id} data={item} />)}
        </div>
        
        {(!newData.length && !checked) && <img className={styles.sabad} src={sabad} alt="sabad"/>}
        {checked && <img src={donShop} alt="donshop" />}

        </div>
    );
};

export default Sabad;