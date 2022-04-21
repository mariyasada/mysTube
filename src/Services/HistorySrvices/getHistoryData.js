import axios from "axios";
export const getHistoryData=async(user)=>{
    try {
        const {data}=await axios.get("/api/user/history",{headers:{
            authorization: user.authenticationToken
        }})
        return data;
    }
    catch{
        console.error("can't get liked videos");
    }
    
}