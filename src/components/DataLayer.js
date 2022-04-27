import React, { createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children}) =>{

    return(
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
    )
};

export const useDatalayerValue = () => useContext(DataLayerContext)

export default DataLayer;