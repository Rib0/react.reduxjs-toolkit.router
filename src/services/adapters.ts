import { createEntityAdapter } from '@reduxjs/toolkit';
import { Posts, Users } from '@/types';

export const postsAdapter = createEntityAdapter<Posts[0]>();
export const postsInitialState = postsAdapter.getInitialState();

export const usersAdapter = createEntityAdapter<Users[0]>();
export const usersInitialState = usersAdapter.getInitialState();