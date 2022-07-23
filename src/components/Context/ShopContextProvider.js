import React,{useReducer,createContext} from 'react';
const initialState = {
    items:[],
    checkout:false,
}
 
const reducer = (state , action)=>{
    switch(action.type){
        case "ADDITEM":
            if(!state.items.find(item => item.id === action.payload.id)){
                state.items.push({
                    ...action.payload
                })
            }
            return{
                ...state,
                items:[...state.items],
                checkout:false,
            }
        case "REMOVEITEM":
            const newItem = state.items.filter(item => item.id !== action.payload.id);
            return{
                ...state,
                items:[...newItem],
            }    
        case "CHECKOUT":
            return{
                items:[],
                checkout:true,
            }    
        case "CLEAR":
            return{
                items:[],
                checkout:false
            }     
        default :
        return state;          
    }

}

export const ShopContext = createContext();
const ShopContextProvider = ({children}) => {
    const [state,dispatch]= useReducer(reducer, initialState)
    return (
        <ShopContext.Provider value={{state ,dispatch}}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;