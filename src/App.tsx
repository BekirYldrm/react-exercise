import React from 'react'; // React'ı import edin
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import More from './pages/More';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/more/:id' element={<More />} />
            </Routes>
        </Router>
    );
};

export default App;
