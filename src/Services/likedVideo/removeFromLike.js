import axios from "axios";

export const removeFromLikeVideoSevice=async(video,user)=>{
   
    try {
        const {data,status}=await axios.delete(`/api/user/likes/${video._id}`,{
            headers:{authorization: user.authenticationToken}
        })
        
        return {data,status};
    }
    catch(err)
    {
        console.error(err,"can't delete data");
    }
}