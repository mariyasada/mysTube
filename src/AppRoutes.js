import React from 'react'
import {Route,Routes} from "react-router-dom";
import { SideBar } from './Components';
import { Home,  LogInPage, SignUpPage, SingleVideoPage, VideoListPage,MockMan, PageNotFound, LikeVideoPage, WatchLaterPage, HistoryPage } from "./Pages";
import { RequiresAuth } from './Router/RequiresAuth';



export const AppRoutes = () => {
  return (
       
        <Routes>
            <Route path="/" element={<Home/>} />           
           <Route path="/videopage" element={<VideoListPage/>}/>
           <Route path="/loginpage" element={<LogInPage/>} />
           <Route path="/signup" element={<SignUpPage/>}/>
           <Route path="/video/:videoId" element={<SingleVideoPage/>}/>
           <Route path="/likevideopage" element={<RequiresAuth children={<LikeVideoPage/>}></RequiresAuth> }/>
           <Route path="/watchlater" element={<RequiresAuth children={<WatchLaterPage/>}></RequiresAuth>}/>
           <Route path="/history" element={<RequiresAuth children={<HistoryPage/>}></RequiresAuth>}/>
           <Route path="*" element={<PageNotFound/>}/>
           <Route path="/mockman" element={<MockMan/>}/>
        </Routes>
    
  )
}




