import { reducerTypes } from "./reducertype"
const {SET_CATEGORY,SEARCH_BY_QUERY}=reducerTypes
export const filterProductReducer=(state,action)=>{  
   switch (action.type) {
       case SET_CATEGORY:
          return {...state,currentCategory:action.payload}          
          
       case SEARCH_BY_QUERY:
          return {...state,searchByQuery:action.payload}   
   
       default:
           return state
   }
}