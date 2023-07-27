import { combineReducers } from '@reduxjs/toolkit';
import { commentsReducer } from './comments';
import { servicesSlice } from '@/services';

const rootReducer = combineReducers({
    comments: commentsReducer,
    [servicesSlice.reducerPath]: servicesSlice.reducer,
});

export { rootReducer };
