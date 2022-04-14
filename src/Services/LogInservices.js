import axios from "axios";

const logInService=async(logInData)=>{    
        try {
        const {data,status} =await axios.post("/api/auth/login",logInData)           
            return {data,status};    
        }
        catch{
            console.error("LogIn failed");
        }
}
export {logInService};