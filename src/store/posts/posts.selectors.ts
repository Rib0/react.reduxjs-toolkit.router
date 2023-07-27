import { servicesSlice, postsAdapter, postsInitialState } from '@/services';
import { RootState } from '..';

const postsResultSelector = servicesSlice.endpoints.getPosts.select();

const postsDataSelector = (state: RootState) => postsResultSelector(state).data ?? postsInitialState;

export const { selectAll: selectAllPosts } = postsAdapter.getSelectors(postsDataSelector);
