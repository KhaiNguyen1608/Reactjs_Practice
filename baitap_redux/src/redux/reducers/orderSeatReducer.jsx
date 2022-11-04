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
  }
});

export const {renderOrder} = orderSeatReducer.actions

export default orderSeatReducer.reducer