import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function MainRoute(){
    return(
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    )
}

export default MainRoute;