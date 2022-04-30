import { createContext, useContext, useReducer,useState  } from "react";
import { useNavigate } from "react-router-dom";
import { logInService,signUpService,signOutService  } from "../Services";
import toast from "react-hot-toast";



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
  
    const signUpHandler =async ({signUpData})=>{       
        const {data,status}= await signUpService(signUpData);        
             if(status === 201)
                {
                localStorage.setItem("auth_token",JSON.stringify(data.encodedToken)); 
               localStorage.setItem("user_name",JSON.stringify(data.createdUser.firstName));
                localStorage.setItem("email",JSON.stringify(data.createdUser.email));                              
                  navigateTo("/loginpage");
                 }
}

const logInHandler = async(logInData)=>{   
    console.log(logInData);
    const {data,status}=await logInService(logInData);
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