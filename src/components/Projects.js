import React, { useContext } from 'react';
import CartProjects from './CartProjects';
import styles from "./styles/Projects.module.css";
import { DataContext } from './Context/DataContextProvider';

const Projects = () => {

    const projectData =useContext(DataContext);


    
    return (
        <div className={styles.cartContainer}>
            {projectData.homeData.map(item => <CartProjects key={item.id} data={item}/>)}
        </div>
    );
};

export default Projects;