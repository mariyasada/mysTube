import axios from "axios";

export const addTowatchLaterVideoService=async(video,user)=>{    
    try {
        const {data,status}=await axios.post("/api/user/watchlater",{video},{
            headers:{
             authorization: user.authenticationToken
            }
        })            
            return {data,status};
    }
    catch(err)
    {
        console.error("could not complete the request (posting)");
    }
}