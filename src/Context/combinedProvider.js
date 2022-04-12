import React from "react";
import {VideoProvider,CategoryProvider} from "../Context/index";

const CombinedProvider =({children})=>{
    return(<VideoProvider>
        <CategoryProvider>
           {children}
        </CategoryProvider>
    </VideoProvider>)
}
export {CombinedProvider};