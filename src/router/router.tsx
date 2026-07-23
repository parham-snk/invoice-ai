import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./routes/home/home.jsx";


export default function Router(){

    return(
        <BrowserRouter basename="/invoice-ai/">
            <Routes>
                    <Route path="/" Component={Home}/>
            </Routes>
        </BrowserRouter>
    )
}