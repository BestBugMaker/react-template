import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Context } from "./utils/common";
import router from "./router";
import store from "./store";

function App() {
    return (
        <Context.Provider value={{ msg: "hello" }}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </Context.Provider>
    );
}

export default App;
