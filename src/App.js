import "./App.css";
import {NavBar} from "./Components/index";
import  {AppRoutes}  from "./AppRoutes";
import { Toaster } from 'react-hot-toast';




function App() {  
  return (
    <div className="App" >
        <NavBar/> 
        <AppRoutes/> 
        <Toaster
        position="top-right"
        toastOptions={{ className: "toast-display", duration: 2000 }}
      />   
        
    </div>
  );
}

export default App;
