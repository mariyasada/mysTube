import axios from "axios";

const signUpService=async(signUpData)=>{
    console.log(signUpData)
   
        try {
        const {data,status} =await axios.post("/api/auth/signup",signUpData)           
            return {data,status};    
        }
        catch{
            console.error("Sign up failed");
        }
}
export {signUpService};