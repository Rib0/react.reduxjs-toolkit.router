import { ApiType } from '@/utils/createApiFactory';

export type ThunkExtraArg = { api: ApiType };

export type Users = {
    id: number;
    name: string;
    email: string;
    username: string;
}[];

export type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}[];

export type Comments = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}[];
