import "./App.css";
import {NavBar} from "./Components/index";
import {Route,Routes} from "react-router";
import { Home, VideoListPage } from "./Pages/index";



function App() {
  return (
    <div className="App">
        <NavBar/>        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/videopage" element={<VideoListPage/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
