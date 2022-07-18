import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import CartProjects from './CartProjects';
import { ShopContext } from './Context/ShopContextProvider';
import styles from './styles/Projects.module.css';

const Sabad = () => {
const {state , dispatch} = useContext(ShopContext);
const newData = state.items;
    return (
        <div>
            <div>{newData.length>0 ?<div>
                <button onClick={()=> dispatch({type:"CLEAR",}) } >CLEAR</button>
                <button onClick={()=> dispatch({type:"CHECKOUT",}) } >CHECKOUT</button>
            </div>:
            <Link to="*" >go to shop</Link>
                }
            </div>
        <div className={styles.cartContainer}>
            {newData.map(item => <CartProjects key={item.id} data={item} />)}
        </div>
        </div>
    );
};

export default Sabad;