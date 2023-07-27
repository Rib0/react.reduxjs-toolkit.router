import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkExtraArg } from '@/types';
import { Comment } from '@/store/comments';

export const fetchCommentsAction = createAsyncThunk(
    'comments/fetchComments',
    async (_, { extra }) => {
        const { api } = extra as ThunkExtraArg;

        const data = api.getComments<Comment[]>();

        return data;
    }
);
