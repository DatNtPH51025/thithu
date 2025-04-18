import axios from "axios";
import { setListXeMay, deleteXeMay, addXeMay, updateXeMay } from "./XeMayReducer";

const apiUrl = "http://192.168.1.8:3000/XeMay";

export const getListXeMay = () => async (dispatch) => {
    try {
        const res = await axios.get(apiUrl);
        dispatch(setListXeMay(res.data));
        console.log("Load dữ liệu thành công", res.data);
        
    } catch (error) {
        console.log("Không load được dữ liệu", error);
    }
}
//xoa
export const deleteXeAct = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${apiUrl}/${id}`);
        dispatch(deleteXeMay(id));
        dispatch(setListXeMay(res.data));
    } catch (error) {
        console.log("Không xóa được dữ liệu", error);
    }
}

//add
export const addXeAct = (newProduct) => async (dispatch) => {
    try {
        const res = await axios.post(apiUrl, newProduct);
        dispatch(addXeMay(res.data));
    } catch (error) {
        console.log("Không thêm được dữ liệu", error);
    }
}

// update
export const updateXeAct = (id, sanpham) => async (dispatch) => {
    try {
        await axios.put(`${apiUrl}/${id}`, sanpham)
        dispatch(updateXeMay(id, sanpham));
    } catch (error) {
        console.log("Lỗi sửa dữ liệu", error);
    }
}

