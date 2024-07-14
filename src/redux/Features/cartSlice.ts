import { TCartItem } from '@/utils/types';
import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
            const existingProduct = state.find((item) => item.id === action.payload.id);
            if (!existingProduct) {
                state.push(action.payload);
            } else {
                existingProduct.count += 1;
            }
            console.log(current(state));
        },
        removeItem: (state, action) => state.filter((item) => item.id !== action.payload),
        increaseProductCount: (state, action) => {
            const selectedProduct = state.find((item) => item.id === action.payload);
            // using type guard
            if (selectedProduct) {
                selectedProduct.count += 1;
            }
            console.log(current(state));
        },
        decreaseProductCount: (state, action) => {
            const selectedProduct = state.find((item) => item.id === action.payload);
            if (selectedProduct) {
                selectedProduct.count > 0 ? selectedProduct.count -= 1 : selectedProduct.count = 0;
            }
            console.log(current(state));
        }

        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, increaseProductCount, decreaseProductCount } = cartSlice.actions

export default cartSlice.reducer