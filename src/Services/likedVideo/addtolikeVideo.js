import axios from "axios"
export const addtoLikePageService=async(video,user)=>{   
    try{
        const {data,status}=await axios.post("/api/user/likes",{video},{
            headers:{authorization: user.authenticationToken}
        })    
    return {data,status};
    }
    catch(err){
        console.error("could not complete the request",err);
    }
}