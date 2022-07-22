import React ,{useContext, useState} from 'react';
import CartProjects from '../CartProjects';
import { DataContext } from '../Context/DataContextProvider';
import styles from '../styles/Projects.module.css';


const Davazdahom = () => {
    const api = useContext(DataContext);
    const [search , setSearch] = useState("");
    const changHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchedData = api.Davazdahom.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div>
            <input className={styles.input} type="text" value={search} placeholder="Search.." onChange={changHandler} />
            <div className={styles.cartContainer}>
                {api.Davazdahom.length  ? searchedData.map(item => <CartProjects key={item.id} data={item} />) : "loading..."}
            </div>
        </div>
    );
};

export default Davazdahom;