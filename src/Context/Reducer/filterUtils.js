const getFilteredByCategory=(state,videos)=>{    
    if(state.currentCategory==="All")
    {
        return videos
    }
    return videos.filter((video)=>video.categoryName=== state.currentCategory)
}

const getFilteredBySearchQuery =(state,videos)=>{    
    if(state.searchByQuery)
    {
        return videos.filter((video)=>video.categoryName.toLowerCase().includes(state.searchByQuery.toLowerCase()))
    }
    else return videos;
}
export {getFilteredByCategory,getFilteredBySearchQuery}