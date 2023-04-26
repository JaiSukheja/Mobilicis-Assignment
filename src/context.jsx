import { useState, createContext } from "react";


export const dataContext = createContext([])

export const dataContextProvider = ({children})=>{

    const [data,setdata] = useState([])

    const setdataFunc = (value) =>{
        setdata(value);
    }
    return(
    
        <dataContext.Provider value={{ data, setdataFunc }}>
            {children}
        </dataContext.Provider>
    ) 
}



