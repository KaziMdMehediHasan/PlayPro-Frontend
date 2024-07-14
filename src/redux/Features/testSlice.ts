import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type CounterObject = {
    id: string;
    count: number;
}
export interface CounterState {
    value: CounterObject[];
}

const initialState: CounterState = {
    value: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value.push(action.payload);
            console.log(current(state));
            /* to inspect the current state. This comes from 
             special note: You are able to append to the state.entities array as if it were a normal array, even though the value of state.entities appears as a Proxy when inspecting or null when logging.
 
             This is because redux - toolkit uses Immer to prevent you from directly mutating the state.In a normal redux reducer you receive the previous state as a function argument.The responsibility is placed on you as the user to not mutate it and instead to return a new object with the updated values by using non- mutating methods such as object spreading, array concat, etc.This is what you have done in your usersCreated reducer, which is totally fine.
 
             But redux- toolkit and Immer opens up an additional possibility for how to write a reducer.In an Immer reducer, the state argument that is received by your function is a "draft" object.This means that you can directly mutate the draft object without causing any issues because it is just a draft and not the true state.
 
             It also means that when you try to examine this previous state, it will behave strangely because of being just a draft and not the actual object that you are expecting it to be.
 
             If you want to console.log a draft value, you can do this by calling console.log(current(value)) using the immer current function, which is included in the redux toolkit package. (edited per @markerikson's comment). */
        },
        decrement: (state) => {
            state.value.pop()
        },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer