import React ,{createContext} from 'react';
import logo from '../assets/icons/phyzic (4).jpg'
import DahomLogo from"../assets/icons/66039.jpeg";
import YazdahomLogo from"../assets/icons/1403.i030.041.F.m004.c5.atom_logo_on_white.jpg";
import DavazdahomLogo from"../assets/icons/74184951.jpg";



export const DataContext = createContext();

const DataContextProvider = ({children}) => {
    const homeData = [
        {
            id : 0,
            title : "کار و انرژی",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"2500",
        },
        {
            id : 1,
            title : "انرژی جنبشی",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"2900"
        },
        {
            id : 2,
            title : "تکانه",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"1000"
        },
        {
            id : 3,
            title : "نیوتون",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"4200"
        },
        {
            id : 4,
            title : "پاسکال",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 5,
            title : "نیرو و توان",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 6,
            title : "پایستگی",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 7,
            title : "قاون اول",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 8,
            title : "مویینگی",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 9,
            title : "راندمان",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 10,
            title : "هانری",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        },
          {
            id : 11,
            title : "سلسیوس",
            link : "https://www.google.com/?hl=FA",
            image : DahomLogo,
            githublink:"",
            price:"3000"
        }
    
    ];
    const Dahom = [
        {
            id : 0,
            title : "کار و انرژی",
            link : "https://www.google.com/?hl=FA",
            image :logo,
            githublink:"",
            price:"2500",
        },
        {
            id : 1,
            title : "انرژی جنبشی",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"2900"
        },
        {
            id : 2,
            title : "تکانه",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"1000"
        },
        {
            id : 3,
            title : "نیوتون",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"4200"
        },
        {
            id : 4,
            title : "پاسکال",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        },
        {
            id : 5,
            title : "نیرو و توان",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        },
        {
            id : 6,
            title : "پایستگی",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        },
        {
            id : 7,
            title : "قاون اول",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        },
        {
            id : 8,
            title : "مویینگی",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        },
        {
            id : 9,
            title : "راندمان",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        },
        {
            id : 10,
            title : "هانری",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        },
          {
            id : 11,
            title : "سلسیوس",
            link : "https://www.google.com/?hl=FA",
            image : logo,
            githublink:"",
            price:"3000"
        }
    
    ];const Yazdahom = [
        {
            id : 0,
            title : "کار و انرژی",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"2500",
        },
        {
            id : 1,
            title : "انرژی جنبشی",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"2900"
        },
        {
            id : 2,
            title : "تکانه",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"1000"
        },
        {
            id : 3,
            title : "نیوتون",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"4200"
        },
        {
            id : 4,
            title : "پاسکال",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 5,
            title : "نیرو و توان",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 6,
            title : "پایستگی",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 7,
            title : "قاون اول",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 8,
            title : "مویینگی",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 9,
            title : "راندمان",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 10,
            title : "هانری",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        },
          {
            id : 11,
            title : "سلسیوس",
            link : "https://www.google.com/?hl=FA",
            image : YazdahomLogo,
            githublink:"",
            price:"3000"
        }
    
    ];const Davazdahom = [
        {
            id : 0,
            title : "کار و انرژی",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"2500",
        },
        {
            id : 1,
            title : "انرژی جنبشی",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"2900"
        },
        {
            id : 2,
            title : "تکانه",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"1000"
        },
        {
            id : 3,
            title : "نیوتون",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"4200"
        },
        {
            id : 4,
            title : "پاسکال",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 5,
            title : "نیرو و توان",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 6,
            title : "پایستگی",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 7,
            title : "قاون اول",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 8,
            title : "مویینگی",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 9,
            title : "راندمان",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        },
        {
            id : 10,
            title : "هانری",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        },
          {
            id : 11,
            title : "سلسیوس",
            link : "https://www.google.com/?hl=FA",
            image : DavazdahomLogo,
            githublink:"",
            price:"3000"
        }
    
    ];
    return (
       <DataContext.Provider value={{Dahom,Yazdahom,Davazdahom,homeData}}>
            {children}
       </DataContext.Provider>
    );
};

export default DataContextProvider;