import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API } from '@/constants/api';
import { Comments, Posts, Users } from '@/types';
import { postsAdapter, postsInitialState, usersAdapter, usersInitialState } from './adapters';

export const servicesSlice = createApi({
    reducerPath: 'services',
    baseQuery: fetchBaseQuery({
        baseUrl: API.baseUrl,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<typeof usersInitialState, void>({
            query: () => ({
                url: API.services.getUsers.url,
                method: API.services.getUsers.method,
            }),
            transformResponse: (response: Users) => {
                return usersAdapter.setAll(usersInitialState, response)
            }
        }),
        getPosts: builder.query<typeof postsInitialState, void>({
            query: () => ({
                url: API.services.getPosts.url,
                method: API.services.getPosts.method,
            }),
            transformResponse: (response: Posts) => {
                return postsAdapter.setAll(postsInitialState, response);
            }
        }),
        getComments: builder.query<Comments, void>({
            query: () => ({
                url: API.services.getCommentsRTK.url,
                method: API.services.getCommentsRTK.method,
            }),
        }),
    }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetCommentsQuery } = servicesSlice;
export * from './adapters';
