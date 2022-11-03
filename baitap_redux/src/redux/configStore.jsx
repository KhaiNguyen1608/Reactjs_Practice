import {configureStore} from '@reduxjs/toolkit';
import renderOrder from './reducers/orderSeatReducer'

export const store = configureStore({
    reducer: {
        renderOrder: renderOrder
    }
});
