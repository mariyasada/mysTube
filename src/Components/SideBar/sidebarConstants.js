import {
  FaHome,
  FaBookmark,
  MdExplore,
  MdOutlinePlaylistAdd,
  MdHistory,
  FaUserCircle,
} from "../Icons";
import { AiTwotoneLike } from "react-icons/ai";
export const sidebarOption=[
    {path:"/",name:"Home",Icon:<FaHome/>},
    {path:"/videopage",name:"Explore",Icon:<MdExplore/>},
    {path:"/playlist",name:"PlayList",Icon:<MdOutlinePlaylistAdd/>},
    {path:"/likevideopage",name:"Liked Video",Icon:<AiTwotoneLike/>},
{path:"/watchlater",name:"Watch Later",Icon:<FaBookmark/>},
{path:"/history",name:"History",Icon:<MdHistory/>}];