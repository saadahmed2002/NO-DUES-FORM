import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";


const AppContext = React.createContext();

const API = "https://hn.algolia.com/api/v1/search?query=react";
const initialState = {
    name:"",
    image:"",
    service:[],
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const updateHomePage = () => {
        return dispatch (
            {
                type: "HOME_UPDATE",
                payload: {
                    name:"Shubh Wankhede",
                    image:"./images/hero.svg",
    
                },
            }
        )
    };
    
    
    const updateAboutPage = () => {
        return dispatch (
            {
                type: "LOGIN_UPDATE",
                payload: {
                    name:"Shubh Wankhede",
                    image:"./images/about1.svg",
    
                },
            }
        )
    }

    const getService = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
                dispatch({type: "GET_SERVICE",payload: data});
        }catch(error){
            console.log(error);
    }
    };
    useEffect(()=>{
       // getService(API);
    },[]);    
    

    return (<AppContext.Provider value={ { ...state, updateHomePage, updateAboutPage } }>{children}</AppContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};
