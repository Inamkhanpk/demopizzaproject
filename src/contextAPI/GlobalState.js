import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';


const iState = {
  items : [ 
    {id: 1, name: 'BUFFALO CHICKEN', content:'this pizza is for healthy people'},
    {id: 2, name: 'GARLIC CHICKEN & BACON RANCH',content:'this pizza is for healthy people' },
    {id: 3, name: 'CHEESY GARLIC WITHCREME FRANCIE',content:'this pizza is for healthy people' }
  ]
}


export const GlobalContext = createContext(iState);


export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, iState);

  
  function getitembyid(id) {
    dispatch({
      type: 'GET_ITEM_BY_ID',
      payload: id
    });
  }

  

  return (
  <GlobalContext.Provider 

  value={{
    items: state.items,
    getitembyid,
    
  }}>

    {children}

  </GlobalContext.Provider>);
}