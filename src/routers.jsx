import React from 'react';
import { Route } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx";
import EyeGlasses from "./pages/Eyeglasses/EyeGlasses.jsx";
import Home from "./pages/Home/Home.jsx";
import CustomLogo from "@/pages/CustomLogo/CustomLogo.jsx";


export const routes = (
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="eyeglasses" element={< EyeGlasses/>} />
            <Route path='service-custom-logo' element={<CustomLogo />} />
        </Route>
    </>
);
