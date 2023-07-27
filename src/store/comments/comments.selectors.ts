import { RootState } from '@/store';

export const commentsStatusSelector = (state: RootState) => state.comments.status;

export const commentsSelector = (state: RootState) => state.comments.items;
