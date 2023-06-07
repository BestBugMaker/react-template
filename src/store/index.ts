import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import petSlice from "./features/petSlice";
import loggerMiddleware from "./middlewares/loggerMiddleware";
import requestMiddleware from "./middlewares/requestMiddleware";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
    // 合并多个slice
    reducer: {
        counter: counterSlice,
        pet: petSlice,
    },
    middleware: [loggerMiddleware, requestMiddleware, thunkMiddleware],
});

// 从 store 本身推断 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
