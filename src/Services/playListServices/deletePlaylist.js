import axios from "axios";

export const deletewholePlayListService=async(playlistId,user)=>{   
    try {
        const{data,status}=await axios.delete(`/api/user/playlists/${playlistId}`,{
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