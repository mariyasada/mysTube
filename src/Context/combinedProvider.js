import React from "react";
import {VideoProvider,CategoryProvider,AuthProvider} from "../Context/index";


const CombinedProvider =({children})=>{
    return(
    <VideoProvider>
        <AuthProvider>
        <CategoryProvider>
           {children}
        </CategoryProvider>
        </AuthProvider>
    </VideoProvider>)
}
export {CombinedProvider};