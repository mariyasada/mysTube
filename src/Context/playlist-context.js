import { createContext,useContext,useReducer,useEffect } from "react";
import { useAuth } from "./Auth-context";
import { playListReducer } from "./Reducer/playListReducer";
import { createPlayListService,getPlayListData,addVideoToPlayListService,deleteVideoFromPlayListService,deletewholePlayListService } from "../Services";
import toast from "react-hot-toast";


const PlayListContext =createContext();
const initialState={
    playList:[],
}
const PlayListProvider=({children})=>{
    const {user}=useAuth();
    const[playlistState,playListDispatch]=useReducer(playListReducer,initialState);

    useEffect(()=>{
          if(user.loginStatus)
          {
              (async()=>{
                  const data=await getPlayListData(user);                  
                  if(data !==undefined)
                  {
                      playListDispatch({type:"LOAD_PLAYLIST_DATA",payload:data.playlists});
                  }
                  else{
                      throw new Error("could not find data")
                  }

              })();
          }
             
            },[user]);


 const createPlayList =async(title)=>{    
     const data = await createPlayListService(user,title);     
     playListDispatch({type:"CREATE_PLAYLIST",payload:data.playlists})
     toast(`${title} playlist successfully created`,{icon:"✔️"});
     
 }  
 const addVideoToPlayList =async(video,playlistId,title)=>{  
     const {data,status}=await addVideoToPlayListService(video,playlistId,user);
     
    if(status===201)
    {
        playListDispatch({type:"ADD_VIDEO_TO_PLAYLIST",payload:data.playlist})
        toast(`video added to ${title} playlist`,{icon:"✔️"})
    }
     else{
         throw new Error('could not complete the request');
     }
 } 

 const deleteVideoFromPlayList =async(video,playlistId)=>{        
   const {data,status}=await deleteVideoFromPlayListService(video,playlistId,user);
   
   if(status===200)
    {
        playListDispatch({type:"DELETE_VIDEO_FROM_PLAYLIST",payload:data.playlist})
         toast(`video removed from playlist`,{ icon: "❌" })
    }
     else{
         throw new Error('could not complete the request');
     }

 }

 const deleteWholePlayList =async(playlistId)=>{
    
     const {data,status}=await deletewholePlayListService(playlistId,user);
     if(status===200)
     {
         playListDispatch({type:"DELETE_PLAYLIST",payload:data.playlists})
         toast("playlist succesfully deleted",{ icon: "❌" });
     }
     else{
         throw new Error('could not complete the request');
     }
 }



    return <PlayListContext.Provider value={{playlistState,playListDispatch,createPlayList,addVideoToPlayList,deleteVideoFromPlayList,deleteWholePlayList}}>{children}</PlayListContext.Provider>
}

const usePlayList=()=>useContext(PlayListContext);

export {usePlayList,PlayListProvider};