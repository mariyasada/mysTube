import { reducerTypes } from "./reducertype";
const {LOAD_PLAYLIST,CREATE_PLAYLIST,DELETE_PLAYLIST,ADD_VIDEO_TO_PLAYLIST,DELETE_VIDEO_FROM_PLAYLIST}=reducerTypes

export const playListReducer = (state,action) => {   
   switch (action.type) {
        case LOAD_PLAYLIST:
        case CREATE_PLAYLIST:
        case DELETE_PLAYLIST:
            return {...state,playList:action.payload}
         

        case ADD_VIDEO_TO_PLAYLIST:       
            return {...state,playList:state.playList.map((playlist)=>playlist._id === action.payload._id ? action.payload
                  :
                  playlist)
                
                } 
             
        case DELETE_VIDEO_FROM_PLAYLIST:            
             return {...state,playList:state.playList.map((playlist)=>playlist._id === action.payload._id ? action.payload
                  :
                  playlist)}


         default:
             return state;    
   }  
}