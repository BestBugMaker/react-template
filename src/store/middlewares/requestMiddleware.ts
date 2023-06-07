import { fetchData, setData } from "../features/petSlice";

const requestMiddleware = (storeAPI) => (next) => (action) => {
    if (action.type === fetchData().type) {
        fetch("https://mock.apifox.cn/m1/1106995-0-default/pet/1")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("res===>", data);
                storeAPI.dispatch(setData(data));
            });
    }

    return next(action);
};

export default requestMiddleware;
