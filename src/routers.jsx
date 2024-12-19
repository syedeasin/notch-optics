import { Route } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx";
import EyeGlasses from "./pages/Eyeglasses/EyeGlasses.jsx";
import Home from "./pages/Home/Home.jsx";
import CustomLogo from "../src/pages/CustomLogo/CustomLogo.jsx";
import LoginRegister from "./pages/Login&Register/LoginRegister.jsx";
import ForgotPassword from "./pages/Login&Register/ForgetPassword.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import RxGlassesAssembly from "./pages/RXGlassesAssembly/RxGlassesAssembly.jsx";
import Dropshipping from "./pages/Dropshipping/Dropshipping.jsx";
import OemOde from "./pages/OemOde/OemOde.jsx";


export const routes = (
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="eyeglasses" element={< EyeGlasses/>} />
            <Route path='service-custom-logo' element={<CustomLogo />} />
            <Route path='service-prescription-glasses-assembly' element={<RxGlassesAssembly />} />
            <Route path='service-dropshipping' element={<Dropshipping />} />
            <Route path='service-glasses-oem-odm' element={<OemOde />} />
            <Route path='login' element={<LoginRegister />} />
            <Route path='register' element={<RegisterForm />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />

        </Route>
    </>
);
