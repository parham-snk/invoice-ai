import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./routes/home/home.jsx";


export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" Component={Home}/>
            </Routes>
        </BrowserRouter>
    )
}