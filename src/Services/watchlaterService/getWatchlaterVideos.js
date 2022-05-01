import axios from "axios";

export const getWatchLaterVideos=async(user)=>{
    try {
        const {data}=await axios.get("/api/user/watchlater",{
             headers:{
             authorization: user.authenticationToken
            }
            })
           
            return data;
    }
    catch{
        console.error("can't get the watch later videos");
    }
}