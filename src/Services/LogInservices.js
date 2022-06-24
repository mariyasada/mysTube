import axios from "axios";
import toast from "react-hot-toast";

const logInService=async(logInData,setIsLoading)=>{    
        try {
            setIsLoading(true);
        const {data,status} =await axios.post("/api/auth/login",logInData)  
        setIsLoading(false);         
            return {data,status};    
        }
        catch{
            console.error("LogIn failed");
            toast("email and password are incorrect",{icon:"✔"})
        }
}
export {logInService};