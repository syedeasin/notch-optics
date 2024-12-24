import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {routes} from "./routers.jsx";


export default function App() {
    return (
        <Router>
            <Routes>{routes}</Routes>
        </Router>
    )
}