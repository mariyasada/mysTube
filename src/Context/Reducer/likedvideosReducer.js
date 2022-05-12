import { reducerTypes } from "./reducertype"
const {LOAD_LIKEVIDEOS,LOAD_WATCHLATERVIDEOS, ADD_TO_LIKE,REMOVE_FROM_LIKE,ADD_TO_WATCHLATER,REMOVE_FROM_WATCHLATER,ADD_TO_HISTORY,REMOVE_FROM_HISTORY,DELETE_HISTORY,LOAD_HISTORY}=reducerTypes;
export const likedvideosReducer = (state,action) => {   
   switch (action.type) {
       case LOAD_LIKEVIDEOS:
       case ADD_TO_LIKE:
       case REMOVE_FROM_LIKE:           
           return {...state, likedList:action.payload}
          
       case LOAD_WATCHLATERVIDEOS:
       case ADD_TO_WATCHLATER:
       case REMOVE_FROM_WATCHLATER:        
           return {...state,watchLaterList:action.payload}    
                  
       case LOAD_HISTORY:    
       case ADD_TO_HISTORY:
       case REMOVE_FROM_HISTORY:
       case DELETE_HISTORY:        
           return {...state,historyList:action.payload}    

         
       default:
          return state;
   }
}


