import { configureStore } from '@reduxjs/toolkit';

import { createApiFactory } from '@/utils/createApiFactory';
import { servicesSlice } from '@/services';
import { rootReducer } from './root-reducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { api: createApiFactory() },
            },
        }).concat(servicesSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
