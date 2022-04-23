import axios from "axios";

export const getPlayListData=async(user)=>{
    try {
        const {data}=await axios.get("/api/user/playlists",{
            headers:{
             authorization: user.authenticationToken
            }
        })                 
            return data;
    }
    catch(err)
    {
        console.error("could not complete the request");
    }
}