import React from 'react'; // React'ı import edin
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Blog from './pages/Blog';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/blog/:id' element={<Blog />} />
            </Routes>
        </Router>
    );
};

export default App;
