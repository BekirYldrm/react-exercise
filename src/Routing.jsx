import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"


// Bu ornekte Routing Islemlerine baktik.
const AppRouting = () => {
    
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRouting