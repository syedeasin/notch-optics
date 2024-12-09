import { Outlet } from 'react-router-dom';
import Topbar from "../components/Navbar/Topbar.jsx";

import Searchbar from "../components/Navbar/Searchbar.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <div>
            <Topbar />
            <Searchbar />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}
