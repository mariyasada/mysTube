import axios from "axios";

export const removeVideoFromHistoryService=async(video,user)=>{
    try {
        const {data}=await axios.delete(`/api/user/history/${video._id}`,{
            headers:{authorization: user.authenticationToken}
        })        
        
        return {data};
    }
    catch(err)
    {
        console.error(err,"can't delete data");
    }
}