import axios from "axios";
export const addVideoToHistoryService=async(video,user)=>{   
    try{
        const {data,status}=await axios.post("/api/user/history",{video},{headers:{
        authorization: user.authenticationToken
        }})        
        return {data,status};
    }
    catch{
        console.error("can't get liked videos");
    }
}