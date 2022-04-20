import React from "react";
import {VideoProvider,CategoryProvider,AuthProvider,LikedandWatchLaterVideoProvider} from "../Context/index"


const CombinedProvider =({children})=>{
    return(
    <VideoProvider>
        <AuthProvider>
            <LikedandWatchLaterVideoProvider>
                <CategoryProvider>
                {children}
                </CategoryProvider>
            </LikedandWatchLaterVideoProvider>
        </AuthProvider>
    </VideoProvider>)
}
export {CombinedProvider};