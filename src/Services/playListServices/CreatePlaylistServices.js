import axios from "axios";

export const createPlayListService=async(user,title)=>{
    try {
        const {data}=await axios.post("/api/user/playlists",{playlist:{title:title,description:"dummy text"}},{
            headers:{
             authorization: user.authenticationToken
            }
        })    
        console.log(data);        
            return data;
    }
    catch(err)
    {
        console.error("could not complete the request");
    }
}