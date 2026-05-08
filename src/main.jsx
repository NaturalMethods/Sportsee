import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import {UserProvider} from "./Context/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <Router />
            </UserProvider>
        </BrowserRouter>
    </StrictMode>
)
