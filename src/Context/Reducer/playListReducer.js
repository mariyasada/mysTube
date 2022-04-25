export const playListReducer = (state,action) => {   
   switch (action.type) {
        case "LOAD_PLAYLIST_DATA":
            return {...state,playList:action.payload}
         
        case "CREATE_PLAYLIST":
             return {...state,playList:action.payload}

        case "DELETE_PLAYLIST":
            return {...state,playList:action.payload}

        case "ADD_VIDEO_TO_PLAYLIST":       
            return {...state,playList:state.playList.map((playlist)=>playlist._id === action.payload._id ? action.payload
                  :
                  playlist)
                
                } 
             
        case "DELETE_VIDEO_FROM_PLAYLIST":            
             return {...state,playList:state.playList.map((playlist)=>playlist._id === action.payload._id ? action.payload
                  :
                  playlist)}


         default:
             return state;    
   }  
}