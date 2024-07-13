import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TCartItem {
    name: string;
    quantity: number;
    price: number;
    image: string;
}

const initialState: TCartItem[] = []

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<TCartItem>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log(action.payload);
            state.push(action.payload);
        },
        removeItem: (state) => {
        },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer