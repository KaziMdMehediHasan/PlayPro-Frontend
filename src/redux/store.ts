import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './api/api'
import cartReducer from '../redux/Features/cartSlice';
import counterReducer from '../redux/Features/testSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cartItems: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch