import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from "./Components/LoginForm"
import ProtectedRoute from "./ProtectedRoute"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import YourRecipes from "./Pages/YourRecipes";
import Navbar from "./Components/Navbar";

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route element={<ProtectedRoute />} >
                <Route index path='/home' element={<Home />} />
                <Route index element={<div>Please Log In</div>} />
                {/* <Route path='/login' element={<LoginForm setUser={setUser} />}></Route> */}
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/recieps' element={<YourRecipes />} />
                <Route path="*" element={<div>404 Page Not Found!</div>} />
            </Route>
        </Routes>
    )
}

export default Views
