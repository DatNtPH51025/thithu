import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listXeMay: [],
}

const XeMayReducer = createSlice({
name: "XeMay",
initialState,
reducers: {
    setListXeMay: (state, action) => {
        state.listXeMay = action.payload;
    },
    deleteXeMay(state, action) {
        //duyet ds sp và loại bỏ sp
        state.listXeMay = state.listXeMay.filter((xe) => xe.id != action.payload); // cap hat danh sach sp
    },
    addXeMay(state, action) {
        //duyet ds sp và loại bỏ sp
        state.listXeMay.push(action.payload);
    },
    updateXeMay(state, action) {
        const { id, xeMay } = action.payload;
        state.listXeMay = forEach((xe, index) => {
            if (xe.id === id) {
                state.listXeMay[index] = { ...xe, ...xeMay };
            }
        })
    }
}

})

export const { setListXeMay, deleteXeMay, addXeMay, updateXeMay } = XeMayReducer.actions;
export default XeMayReducer.reducer;