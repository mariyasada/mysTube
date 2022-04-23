export const likedvideosReducer = (state,action) => {   
   switch (action.type) {
       case "LOAD_LIKED_VIDEOS":
           return {...state, likedList:action.payload}
          
       case "LOAD_WATCHLATER_VIDEOS":
           return {...state,watchLaterList:action.payload}

       case "ADD_VIDEO_TO_LIKE_PAGE":
               return {...state, likedList:action.payload}
               
       case "REMOVE_VIDEO_FROM_LIKE_PAGE":
               return {...state, likedList:action.payload}    
               
       case "ADD_TO_WATCH_LATER":
           return {...state,watchLaterList:action.payload}
         
       case "REMOVE_FROM_WATCH_LATER":
           return {...state,watchLaterList:action.payload}    
           
       case "ADD_TO_HISTORY":
           return {...state,historyList:action.payload} 

        case "REMOVE_FROM_HISTORY":
            return {...state,historyList:action.payload} 
          
        case "REMOVE_ALL_HISTORY":  
           return { ...state, historyList: action.payload }   

         
       default:
          return state;
   }
}


