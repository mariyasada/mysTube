export const filterProductReducer=(state,action)=>{  
   switch (action.type) {
       case "SET_CURRENT_CATEGORY":
          return {...state,currentCategory:action.payload}          
          
       case "SEARCH_BY_QUERY":
          return {...state,searchByQuery:action.payload}   
   
       default:
           return state
   }
}