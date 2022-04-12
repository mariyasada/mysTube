import React from 'react'
import {Route,Routes} from "react-router-dom";
import { Home,  LogInPage, SignUpPage, SingleVideoPage, VideoListPage } from "./Pages";

export const AppRoutes = () => {
  return (
       
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/videopage" element={<VideoListPage/>}/>
           <Route path="/loginpage" element={<LogInPage/>} />
           <Route path="/signup" element={<SignUpPage/>}/>
           <Route path="/singlevideopage" element={<SingleVideoPage/>}/>
        </Routes>
    
  )
}




