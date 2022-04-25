import axios from "axios";

export const deleteVideoFromPlayListService=async(video,playlistId,user)=>{   
    try {
        const {data,status}=await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`,{
         headers:{
             authorization: user.authenticationToken
            }
        })    
               
            return {data,status};
    }
    catch(err)
    {
        console.error("could not complete the request");
    }
}