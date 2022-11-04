import {configureStore} from '@reduxjs/toolkit';
import orderSeatReducer from './reducers/orderSeatReducer'

export const store = configureStore({
    reducer: {
        orderSeatReducer: orderSeatReducer
    }
});
