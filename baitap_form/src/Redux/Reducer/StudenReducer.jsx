//rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [

    ],
    studentList: [

    ]
}

const StudenReducer = createSlice({
    name: 'StudenReducer',
    initialState,
    reducers: {
        addNewStudent: (state, { type, payload }) => {
            //  B1: Lấy dữ liệu từ payload
            // const studentID  = payload;
            //B2: Xử lý thay đổi state
            // const item = state.cart.find(sp => sp.id === studentID.id);
            // if (item) { //Nếu sản phẩm có trong giỏ hàng => tăng số lượng
            //     item.quantity = item.quantity + 1;
            // } else {
            //     //Nếu sản phẩm chưa có trong giỏ hàng thì lấy sản phẩm đó thêm vào giỏ hàng 
            //     state.cart = [...state.cart, studentID]
            // }
            state.studentList = [...state.studentList, payload]
        },
        deleteItem : (state,{type,payload}) => {
            //B1: Lấy dữ liệu từ payload gửi lên
            const id = payload; //Gửi lên id của sp được click
            //B2: cập nhật state
            state.cart = state.cart.filter(item=>item.id !== id)
        },
        changeQuantity: (state,{payload})=>{
            //payload: {id:'',quantity:1 | -1}
            //Lấy dữ liệu từ payload
            const {id,quantity} = payload;
            //Cập nhật state.cart
            //Tìm ra sản phẩm cần tăng giảm số lượng dựa vào id
            const item = state.cart.find(studentID => studentID.id === id);
            item.quantity += quantity;

        }
    }
});
export const { addNewStudent,deleteItem,changeQuantity} = StudenReducer.actions
export default StudenReducer.reducer
















