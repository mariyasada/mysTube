import React from 'react'
import {Route,Routes} from "react-router-dom";
import { Home,  LogInPage, SignUpPage, VideoListPage } from "./Pages/index";

export const AppRoutes = () => {
  return (
    <div>     
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/videopage" element={<VideoListPage/>}/>
           <Route path="/loginpage" element={<LogInPage/>} />
           <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
    </div>
  )
}




