import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { CategoryProvider, VideoProvider } from "./Context";
import { CombinedProvider } from "./Context/combinedProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CombinedProvider>
          <App />
    </CombinedProvider>    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
