import React from 'react';
import CartProjects from './CartProjects';
import logo from "../components/assets/icons/phyzic (4).jpg";
import styles from "./styles/Projects.module.css";

const projectData = [
    {
        id : 0,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 1,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 2,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
    {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    },
      {
        id : 3,
        title : "google",
        link : "https://www.google.com/?hl=FA",
        image : {logo},
        githublink:"",
    }

]

const Projects = () => {
    return (
        <div className={styles.cartContainer}>
            {projectData.map(item => <CartProjects key={item.id} data={item}/>)}
        </div>
    );
};

export default Projects;