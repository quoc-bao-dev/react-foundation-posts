import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPost } from "../interfaces/post";

interface IPostSate {
    posts: TPost[]
    isLoading: boolean
}

const initialState: IPostSate = {
    posts: [],
    isLoading: false
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<TPost[]>) => {
            state.posts = action.payload
        }
    }
})

export const { setPosts } = postSlice.actions
export default postSlice.reducer