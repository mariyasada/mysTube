import "./App.css";
import {NavBar} from "./Components/index";
import {Route,Routes} from "react-router-dom";
import { Home,  LogInPage, SignUpPage, VideoListPage } from "./Pages/index";



function App() {
  return (
    <div className="App">
        <NavBar/>  
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/videopage" element={<VideoListPage/>}/>
           <Route path="/loginpage" element={<LogInPage/>} />
           <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
