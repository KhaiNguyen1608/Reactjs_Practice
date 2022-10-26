import {configureStore} from '@reduxjs/toolkit';
import StudenReducer from '../Reducer/StudenReducer';

export const store = configureStore({
    reducer: {
        StudenReducer: StudenReducer
    }
});



