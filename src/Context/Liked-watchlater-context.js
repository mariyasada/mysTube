import { createContext, useContext, useReducer,useEffect} from "react";
import { getLikedVideo,addtoLikePageService,removeFromLikeVideoSevice,getWatchLaterVideos,addTowatchLaterVideoService,removeFromWatchLaterService } from "../Services";
import { useAuth } from "./Auth-context";
import { likedvideosReducer } from "./Reducer/likedvideosReducer";
import toast from "react-hot-toast";


const LikedandwatchLaterVideoContext=createContext();

const initialState={
    likedList:[],
    watchLaterList:[]
}

const LikedandWatchLaterVideoProvider=({children})=>{
    const [videoState,videoDispatch]=useReducer(likedvideosReducer,initialState);
    const {user}=useAuth();
    

    useEffect(()=>{
        {
            if(user.loginStatus)
            {
             (async()=>{
                  const data= await getLikedVideo(user);
                  const wdata =await getWatchLaterVideos(user);
                  if(data && wdata !==undefined)
                  {
                    videoDispatch({type:"LOAD_LIKED_VIDEOS",payload:data.likes})
                    videoDispatch({type:"LOAD_WATCHLATER_VIDEOS",payload:wdata.watchlater})
                  }
                  else{
                       throw new Error("could not find data")
                  }                
             })();
            
            }
        }
    }
    ,[user]);

// ADD TO LIKED VIDEO
    const addToLikeVideo=async(video)=>{
        const {data,status}=await addtoLikePageService(video,user);
        if(status===201)
        {
              videoDispatch({type:"ADD_VIDEO_TO_LIKE_PAGE",payload:data.likes})
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
            videoDispatch({type:"REMOVE_VIDEO_FROM_LIKE_PAGE",payload:data.likes})
            toast("remove from liked videos page", { icon: "❌" });
        }
        else{
            throw new Error("could not complete the request");
        }  
}
const addToWatchLaterVideo =async(video)=>{
    const {data,status}= await addTowatchLaterVideoService(video,user);
    if(status===201)
    {
      videoDispatch({type:"ADD_TO_WATCH_LATER",payload:data.watchlater}) 
        toast("added to watch later videos page",{icon:"✔️"});
    }
    else{
        throw new Error("could not complete the request");
    }
    
}

const removeFromWatchLater=async(video)=>{
    const {data,status}=await removeFromWatchLaterService(video,user);
    if(status===200)
    {
      videoDispatch({type:"REMOVE_FROM_WATCH_LATER",payload:data.watchlater})
      toast("remove from watch later videos page", { icon: "❌" });
    }
    else{
        throw new Error("could not complete the request");
    }
    
}

    return <LikedandwatchLaterVideoContext.Provider value={{videoState,videoDispatch,addToLikeVideo,removeFromLikedVideo,addToWatchLaterVideo,removeFromWatchLater}}>{children}</LikedandwatchLaterVideoContext.Provider>
}

const useLikedAndWatchLaterVideos=()=>useContext(LikedandwatchLaterVideoContext);

export {useLikedAndWatchLaterVideos,LikedandWatchLaterVideoProvider};