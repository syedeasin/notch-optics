import React from 'react';
import { Route } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx";
import EyeGlasses from "./pages/Eyeglasses/EyeGlasses.jsx";
import Home from "./pages/Home/Home.jsx";


export const routes = (
    <>
        <Route path="/" element={<Layout />}>
            <Route  index element={< EyeGlasses/>} />
            <Route path="home" element={<Home />} />
        </Route>
    </>
);
