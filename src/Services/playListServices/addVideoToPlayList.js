import axios from "axios";

export const addVideoToPlayListService =async(video,playlistId,user)=>{
    console.log(playlistId,"from adding service");
 try { 
     const {data,status}=await axios.post(`/api/user/playlists/${playlistId}`,{video},{
         headers:{
             authorization: user.authenticationToken
            }
        })    
        console.log(data,"from addvideotoplaylist api calls");        
            return {data,status};
    }
    catch(err)
    {
        console.error("could not complete the request");
    }
}