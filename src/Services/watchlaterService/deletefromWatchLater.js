import axios from "axios";

export const removeFromWatchLaterService=async(video,user)=>{    
    try {
        const {data,status}=await axios.delete(`/api/user/watchlater/${video._id}`,{
            headers:{
             authorization: user.authenticationToken
            }
        })
        return {data,status};
    }
    catch{
        console.error("could not complete the request");
    }
}