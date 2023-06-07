import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/home";

export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />}></Route>
        </>
    )
);