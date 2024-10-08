import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import More from "../../pages/More"
import Product from "../../pages/Product"

// Burda Routing islemleri var Product ve More page`lerde axios orneklerine bak.

const AppAxios = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Product />} />
                    <Route path="/more/:id" element={<More />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppAxios