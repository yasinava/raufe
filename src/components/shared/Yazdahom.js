import React ,{useContext, useState} from 'react';
import CartProjects from '../CartProjects';
import { DataContext } from '../Context/DataContextProvider';
import styles from '../styles/Projects.module.css';


const Yazdahom = () => {
    const api = useContext(DataContext);
    const [search , setSearch] = useState("");
    const changHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchedData = api.Yazdahom.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div>
            <input type="text" value={search} placeholder="Search.." onChange={changHandler} />
            <div className={styles.cartContainer}>
                {api.Yazdahom.length ? searchedData.map(item => <CartProjects key={item.id} data={item} />) : "loading..."}
            </div>
        </div>
    );
};

export default Yazdahom;