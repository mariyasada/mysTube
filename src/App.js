import "./App.css";
import {NavBar} from "./Components/index";
import  {AppRoutes}  from "./AppRoutes";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useVideos } from "./Context";
import { reducerTypes } from "./Context/Reducer/reducertype";


function App() { 
  const {state,dispatch}=useVideos();
  const {pathname}=useLocation();
  useEffect(()=>{
    return ()=>{dispatch({type:reducerTypes.CLEAR_SEARCH})}
  },[pathname])
  return (
    <div className="App" >
        <NavBar/> 
        <AppRoutes/> 
        <Toaster
        position="top-right"
        toastOptions={{ className: "toast-display", duration: 2000 }}
      />   
        
    </div>
  );
}

export default App;
