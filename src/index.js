import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';



const root = ReactDOM.createRoot((document.getElementById('root')));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/login' element={<LoginForm />}></Route>
        </Routes>
    </Router>
);