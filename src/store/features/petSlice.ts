import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PetCategory {
    id: number;
    name: string;
}

interface PetState {
    info: {
        code: string;
        data: {
            id: string;
            name: string;
            photoUrls: string[];
            category: PetCategory;
            tags: Array<PetCategory>;
            status: string;
        };
    };
}

const initialState: PetState = {
    info: {
        code: "",
        data: {
            id: "",
            name: "",
            photoUrls: [""],
            category: {
                id: 0,
                name: "",
            },
            tags: [],
            status: "pending",
        },
    },
};

const petSlice = createSlice({
    name: "pet",
    initialState,
    reducers: {
        fetchData: (state) => {},
        setData: (state, { type, payload }) => {
            state.info = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getPetData.fulfilled, (state, { payload }) => {
            state.info = payload;
        });
    },
});

export const { fetchData, setData } = petSlice.actions;

const getPetDataApi = () => fetch("https://mock.apifox.cn/m1/1106995-0-default/pet/1").then((res) => res.json());

// RTK 提供的处理异步的方法
export const getPetData = createAsyncThunk("pet/get", async () => {
    const res = await getPetDataApi();
    console.log("getPetData thunk!!");
    return res;
});

// redux-thunk提供的处理异步的方法
export const fetchPetData = () => (dispatch) => {
    fetch("https://mock.apifox.cn/m1/1106995-0-default/pet/1")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log("res===>", data);
            dispatch(setData(data));
        });
};

export default petSlice.reducer;
