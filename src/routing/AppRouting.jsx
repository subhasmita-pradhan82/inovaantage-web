import { BrowserRouter, Routes , Route } from "react-router-dom";
import HomeComponent from "../mainComponent/HomeComponent";

function AppRounting(){


    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeComponent page="home"/>}></Route>

        </Routes>
        </BrowserRouter>
    )
}

export default AppRounting;