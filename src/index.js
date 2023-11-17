import { StrictMode } from "react";
import './index.css'
import { createRoot } from "react-dom/client";  // Import createRoot from "react-dom/client"
import App from "./App";
import { store } from './app/store'
import { Provider } from "react-redux";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);  // Use createRoot from "react-dom/client"

root.render(
  <StrictMode>
   
  <Provider store={store}>
  <App />
  </Provider>
 
  </StrictMode>
);
