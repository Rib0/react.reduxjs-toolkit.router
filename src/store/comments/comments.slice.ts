import { createSlice } from '@reduxjs/toolkit';
import { fetchCommentsAction } from './comments.actions';

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface CommentsSlice {
    status: 'loading' | 'succeeded' | 'failed' | '';
    items: Comment[];
}

const initialState: CommentsSlice = {
    status: '',
    items: [],
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsAction.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCommentsAction.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.items = action.payload;
            })
            .addCase(fetchCommentsAction.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const commentsReducer = commentsSlice.reducer;
