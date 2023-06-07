import React, { useContext, useState } from "react";
import { Context, debounce } from "../../utils/common";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increment, incrementByAmount } from "../../store/features/counterSlice";
import { fetchPetData, getPetData } from "../../store/features/petSlice";

function Home() {
    // const [count, setCount] = useState(0);
    // const ctx = useContext(Context);

    const counter = useAppSelector((state) => state.counter.value);
    const pet = useAppSelector((state) => state.pet.info.data);
    const dispatch = useAppDispatch();

    const clickCounter = () => {
        dispatch(incrementByAmount(2));
    };

    const getData = () => {
        dispatch(getPetData());
    };
    return (
        <div>
            <div>{counter}</div>
            <Button type="primary" onClick={clickCounter}>
                INCREMENT
            </Button>
            <Button type="dashed" onClick={getData}>
                fetchData
            </Button>
            <div>
                <div>宠物信息：</div>
                <div>{pet.name}</div>
            </div>
        </div>
    );
}

export default Home;
