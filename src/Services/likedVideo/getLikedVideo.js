import axios from "axios";

export const getLikedVideo=async(user)=>{   
    try{
        const {data}=await axios.get("/api/user/likes",{
            headers:{
                authorization:user.authenticationToken,
            }
        })
    
    return data;
    }
    catch{
        console.error("can't get liked videos");
    }
}