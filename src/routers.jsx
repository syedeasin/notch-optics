import { Route } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx";
import EyeGlasses from "./pages/Eyeglasses/EyeGlasses.jsx";
import Home from "./pages/Home/Home.jsx";
import CustomLogo from "../src/pages/CustomLogo/CustomLogo.jsx";
import Login from "../src/pages/Login & Register/Login.jsx";
import Register from "../src/pages/Login & Register/Register.jsx";
import ForgotPassword from "../src/pages/Login & Register/ForgetPassword.jsx";


export const routes = (
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="eyeglasses" element={< EyeGlasses/>} />
            <Route path='service-custom-logo' element={<CustomLogo />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
        </Route>
    </>
);
