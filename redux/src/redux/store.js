import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';

export default configureStore({
    //adicione os reducers aqui
    reducer:{
        user:userReducer
    }
})