import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import YourRecipes from "./Pages/YourRecipes";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route index path='/recieps' element={<ProtectedRoute user={user}>
            <YourRecipes />
          </ProtectedRoute>} />
          <Route path='/login' element={<LoginForm setUser={setUser} />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/home' element={<Home />} />
          <Route path="*" element={<div>404 Page Not Found!</div>} />
          {/* <Route path='/welcome' element={<Welcome />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
