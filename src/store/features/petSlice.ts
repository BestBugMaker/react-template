import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPetDetails } from "../../api/modules/common";

interface PetCategory {
    id: number;
    name: string;
}

export interface PetInfo {
    code: number;
    data: {
        id: string;
        name: string;
        photoUrls: string[];
        category: PetCategory;
        tags: Array<PetCategory>;
        status: string;
    };
}

export interface PetState {
    info: PetInfo;
}

const initialState: PetState = {
    info: {
        code: 0,
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

// RTK 提供的处理异步的方法
export const getPetData = createAsyncThunk("pet/get", async () => {
    const res = await getPetDetails();
    return res;
});

// redux-thunk提供的处理异步的方法
// export const fetchPetData = () => (dispatch) => {
//     fetch("https://mock.apifox.cn/m1/1106995-0-default/pet/1")
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             console.log("res===>", data);
//             dispatch(setData(data));
//         });
// };

export default petSlice.reducer;
