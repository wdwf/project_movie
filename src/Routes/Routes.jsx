import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

//Pages
import Home from "../pages/Home"
import Details from "../pages/Details";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/details/:id" element={<Details/>} />
            </Routes>
        </Router>
    )
}