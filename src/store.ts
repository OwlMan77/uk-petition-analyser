import { configureStore } from '@reduxjs/toolkit';
import { petitionApi } from './services/petitions';

export const store = configureStore({
    reducer: {
        [petitionApi.reducerPath]: petitionApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petitionApi.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;