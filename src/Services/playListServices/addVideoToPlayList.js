import axios from "axios";

export const addVideoToPlayListService =async(video,playlistId,user)=>{   
 try { 
     const {data,status}=await axios.post(`/api/user/playlists/${playlistId}`,{video},{
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