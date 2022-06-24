import axios from "axios";

const signUpService=async(signUpData,setIsLoading)=>{
   
        try {
            setIsLoading(true);
        const {data,status} =await axios.post("/api/auth/signup",signUpData)  
        setIsLoading(false);         
            return {data,status};    
        }
        catch{
            console.error("Sign up failed");
        }
}
export {signUpService};