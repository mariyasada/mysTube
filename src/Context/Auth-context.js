import { createContext, useContext, useReducer,useState  } from "react";
import { useNavigate } from "react-router-dom";
import { logInService,signUpService,signOutService  } from "../Services";
import toast from "react-hot-toast";



const AuthContext= createContext();
const token=JSON.parse(localStorage.getItem("auth_token"));

const inititalAuthStateValue={
    loginStatus:token?true:false,
    authenticationToken:token
}

const AuthProvider=({children})=>{
    const navigateTo=useNavigate();     
    const[user,setUser]  =useState(inititalAuthStateValue);
  
    const signUpHandler =async ({signUpData})=>{       
        const {data,status}= await signUpService(signUpData);        
             if(status === 201)
                {
                localStorage.setItem("auth_token",JSON.stringify(data.encodedToken));                                
                  navigateTo("/loginpage");
                 }
}

const logInHandler = async(logInData)=>{   
    console.log(logInData);
    const {data,status}=await logInService(logInData);
    if(status===200)
    {
        localStorage.setItem("auth_token", JSON.stringify(data.encodedToken));
        setUser({loginStatus:true,
                authenticationToken:data.encodedToken})   
         toast("Successfully loggedIn", { icon:  "✔️"  });
    
        navigateTo("/videopage");
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