import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import Idev2 from "./pages/Idev2/Idev2";

function MainRoute(){
    return(
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/idev2" element={<Idev2 />}/>
        </Routes>
    )
}

export default MainRoute;