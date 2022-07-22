import React ,{useContext, useState} from 'react';
import CartProjects from '../CartProjects';
import { DataContext } from '../Context/DataContextProvider';
import styles from '../styles/Projects.module.css';



const Dahom = () => {
    const api = useContext(DataContext);
    const [search , setSearch] = useState("");
    const changHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchedData = api.Dahom.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div>
            <div>
            
            <input className={styles.input} type="text" value={search} placeholder="Search.." onChange={changHandler} />
            </div>
            <div className={styles.cartContainer}>
                {api.Dahom.length ? searchedData.map(item => <CartProjects key={item.id} data={item} />) : "loading..."}
            </div>
        </div>
    );
};

export default Dahom;