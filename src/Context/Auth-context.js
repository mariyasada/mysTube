import { createContext, useContext, useReducer,useState  } from "react";
import { useNavigate } from "react-router-dom";
import { logInService,signUpService,signOutService  } from "../Services";
import toast from "react-hot-toast";
import { useVideos } from "./video-context";



const AuthContext= createContext();
const token=JSON.parse(localStorage.getItem("auth_token"));
const userName=JSON.parse(localStorage.getItem("user_name"));
const email=JSON.parse(localStorage.getItem("email"));

const inititalAuthStateValue={
    loginStatus:token?true:false,
    authenticationToken:token,
    userName:userName,
    email:email
}

const AuthProvider=({children})=>{
    const navigateTo=useNavigate();     
    const[user,setUser]  =useState(inititalAuthStateValue);
    const { isLoading, setIsLoading } = useVideos();
  
    const signUpHandler =async ({signUpData})=>{         
          
        const {data,status}= await signUpService(signUpData,setIsLoading);       
             if(status === 201)
                {
                localStorage.setItem("auth_token",JSON.stringify(data.encodedToken)); 
               localStorage.setItem("user_name",JSON.stringify(data.createdUser.firstName));
                localStorage.setItem("email",JSON.stringify(data.createdUser.email));    
                setUser({loginStatus:true,
                authenticationToken:data.encodedToken,
                userName:data.createdUser.firstName,
                email:data.createdUser.email})
                  navigateTo("/videopage");
                 }
                
}

const logInHandler = async(logInData)=>{      
    if(logInData.email ==="" || logInData.password ==="")
    {
        toast("fill the fields",{ icon:  "✔️"  });
    } 
    else{  
    const {data,status}=await logInService(logInData,setIsLoading);  
    if(status===200)
    {
        localStorage.setItem("auth_token", JSON.stringify(data.encodedToken));
        localStorage.setItem("user_name",JSON.stringify(data.foundUser.firstName)); 
        localStorage.setItem("email",JSON.stringify(data.foundUser.email)); 
        setUser({loginStatus:true,
                authenticationToken:data.encodedToken,
                userName:data.foundUser.firstName,
                email:data.foundUser.email})   
         toast("Successfully loggedIn", { icon:  "✔️"  });
        navigateTo("/videopage");
    }
    else{
        toast("could not complete the request");
    }
}
}

const logOutHandler=()=>{
    signOutService();
    setUser({loginStatus:false})   
    toast("Logged out successfully", { icon:  "✔️"  }); 
    navigateTo("/");  
}

    return <AuthContext.Provider value={{signUpHandler,logInHandler,logOutHandler,user,setUser}}>{children}</AuthContext.Provider>
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider};