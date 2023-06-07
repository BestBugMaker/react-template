import { createContext } from "react";

export const debounce = (fun, delay = 1000) => {
    let timer;
    return (...params) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fun(...params);
        }, delay);
    };
};

export const Context = createContext();
