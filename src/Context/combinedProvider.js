import React from "react";
import {VideoProvider,CategoryProvider,AuthProvider,LikedandWatchLaterVideoProvider,PlayListProvider} from "../Context/index"


const CombinedProvider =({children})=>{
    return(
    <VideoProvider>
        
        <AuthProvider>
            <PlayListProvider>
            <LikedandWatchLaterVideoProvider>
                <CategoryProvider>
                {children}
                </CategoryProvider>
            </LikedandWatchLaterVideoProvider>
            </PlayListProvider>
        </AuthProvider>
        
    </VideoProvider>)
}
export {CombinedProvider};