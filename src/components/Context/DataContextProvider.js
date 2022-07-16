import React ,{createContext} from 'react';
import logo from '../assets/icons/phyzic (4).jpg'


export const DataContext = createContext();

const DataContextProvider = ({children}) => {
    const Dahom = [
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
    
    ];
    const Yazdahom = [
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
    
    ];
    const Davazdahom = [
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
    
    ];
    return (
       <DataContext.Provider value={{Dahom,Yazdahom,Davazdahom}}>
            {children}
       </DataContext.Provider>
    );
};

export default DataContextProvider;