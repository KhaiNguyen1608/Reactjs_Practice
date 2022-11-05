import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    seatNumber: [

    ],
};

const orderSeatReducer = createSlice({
  name: 'orderSeatReducer',
  initialState,
  reducers: {
    renderOrder: (state, action) => {
      state.seatNumber.push(action.payload);
    },
    deleteOrder: (state, action) => {
      const index = state.seatNumber.indexOf(action.payload)
      if (index > -1) { // only splice array when item is found
        state.seatNumber.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }
});

export const {renderOrder, deleteOrder} = orderSeatReducer.actions

export default orderSeatReducer.reducer