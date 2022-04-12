import axios from "axios";
import { createContext,useContext, useEffect,useState,useReducer} from "react";
import { getFilteredByCategory,getFilteredBySearchQuery } from "./Reducer/filterUtils";
import { filterProductReducer } from "./Reducer/filterProductReducer";


const initialState={
    currentCategory:"All",
    searchByQuery:""
}

const VideoContext =createContext();
const VideoProvider =({children})=>{
    const [videos,setVideos]=useState([]);
    const [state,dispatch]=useReducer(filterProductReducer,initialState);
    useEffect(()=> {
        (async ()=>{
            try{
                  const {data}=await axios.get("/api/videos");
                  console.log(data);
                  setVideos(data.videos);
            }
            catch
            {
                console.error(err,"something wong,can't get videos");
            }
               
        })();
    },[])

    const FilteredData=getFilteredByCategory(state,videos);
    const FinalFilteredData=getFilteredBySearchQuery(state,FilteredData)
    return <VideoContext.Provider value={{videos,setVideos,state,dispatch,FilteredData,FinalFilteredData}}>{children}</VideoContext.Provider>
}

const useVideos=()=>useContext(VideoContext);
export {useVideos,VideoProvider};