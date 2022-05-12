import { createContext, useContext, useReducer,useEffect} from "react";
import { getLikedVideo,addtoLikePageService,removeFromLikeVideoSevice,getWatchLaterVideos,addTowatchLaterVideoService,removeFromWatchLaterService,getHistoryData,addVideoToHistoryService,removeVideoFromHistoryService,removeAllHistoryService } from "../Services";
import { useAuth } from "./Auth-context";
import { likedvideosReducer } from "./Reducer/likedvideosReducer";
import toast from "react-hot-toast";
import {reducerTypes} from "./Reducer/reducertype";

const {LOAD_LIKEVIDEOS,LOAD_WATCHLATERVIDEOS, ADD_TO_LIKE,REMOVE_FROM_LIKE,ADD_TO_WATCHLATER,REMOVE_FROM_WATCHLATER,ADD_TO_HISTORY,REMOVE_FROM_HISTORY,DELETE_HISTORY,LOAD_HISTORY}=reducerTypes;



const LikedandwatchLaterVideoContext=createContext();

const initialState={
    likedList:[],
    watchLaterList:[],
    historyList:[]
}

const LikedandWatchLaterVideoProvider=({children})=>{
    const [videoState,videoDispatch]=useReducer(likedvideosReducer,initialState);
    const {user}=useAuth();
    

    useEffect(()=>{
        
            if(user.loginStatus)
            {
             (async()=>{
                
                  const[data,wData,hData]= await Promise.all([getLikedVideo(user), getWatchLaterVideos(user),getHistoryData(user)]);                
                  if((data && wData && hData) !==undefined)
                  {
                    videoDispatch({type:LOAD_LIKEVIDEOS,payload:data.likes})
                    videoDispatch({type:LOAD_WATCHLATER_VIDEOS,payload:wData.watchlater})
                    videoDispatch({type:LOAD_HISTORY,payload:hData.history})
                  }
                  else{
                       throw new Error("could not find data")
                  }                
             })();
            
            }
        },[user]);

// ADD TO LIKED VIDEO
    const addToLikeVideo=async(video)=>{
        const {data,status}=await addtoLikePageService(video,user);
        if(status===201)
        {
              videoDispatch({type:ADD_TO_LIKE,payload:data.likes})
              toast("added to like  videos page",{icon:"✔️"});
        }
        else{
            throw new Error("could not complete the request");
        }
        
    }
// REMOVE FROM LIKED VIDEO    
const removeFromLikedVideo=async(video)=>{
    const {data,status}=await removeFromLikeVideoSevice(video,user);
   
    if(status===200)
        {
            videoDispatch({type:REMOVE_FROM_LIKE,payload:data.likes})
            toast("remove from liked videos page", { icon: "❌" });
        }
        else{
            throw new Error("could not complete the request");
        }  
}
// ADD TO WATCH LATER VIDEO
const addToWatchLaterVideo =async(video)=>{
    const {data,status}= await addTowatchLaterVideoService(video,user);
    if(status===201)
    {
      videoDispatch({type:ADD_TO_WATCHLATER,payload:data.watchlater}) 
        toast("added to watch later videos page",{icon:"✔️"});
    }
    else{
        throw new Error("could not complete the request");
    }
    
}
// REMOVE FROM WATCHLATER VIDEO
const removeFromWatchLater=async(video)=>{
    const {data,status}=await removeFromWatchLaterService(video,user);
    if(status===200)
    {
      videoDispatch({type:REMOVE_FROM_WATCHLATER,payload:data.watchlater})
      toast("remove from watch later videos page", { icon: "❌" });
    }
    else{
        throw new Error("could not complete the request");
    }
}
// ADD VIDEO TO HISTORYPAGE
const addVideoToHistory =async(video)=>{    
    const {data}=await addVideoToHistoryService(video,user);
    videoDispatch({type:ADD_TO_HISTORY,payload:data.history})
}
//  REMOVE VIDEO FROM HISTORYPAGE
const removeVideoFromHistory =async(video)=>{
    const {data}= await removeVideoFromHistoryService(video,user);
    videoDispatch({type:REMOVE_FROM_HISTORY,payload:data.history})
    toast("Remove video from history", {icon:"✔️"});
}
const removeAllHistory=async()=>{
    const {data,status}=await removeAllHistoryService(user);
    if(status===200)
    {
      videoDispatch({type:DELETE_HISTORY,payload:data.history})
      toast("cleared all history",{icon:"✔️"})
    }
    else{
        throw new Error("could not complete the request");
    }
    
}

    return <LikedandwatchLaterVideoContext.Provider value={{videoState,videoDispatch,addToLikeVideo,removeFromLikedVideo,addToWatchLaterVideo,removeFromWatchLater,addVideoToHistory,removeVideoFromHistory,removeAllHistory}}>{children}</LikedandwatchLaterVideoContext.Provider>
}

const useLikedAndWatchLaterVideos=()=>useContext(LikedandwatchLaterVideoContext);

export {useLikedAndWatchLaterVideos,LikedandWatchLaterVideoProvider};