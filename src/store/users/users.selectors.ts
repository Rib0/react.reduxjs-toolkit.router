import { servicesSlice, usersAdapter, usersInitialState } from '@/services';
import { RootState } from '..';

const postsResultSelector = servicesSlice.endpoints.getUsers.select();

const postsDataSelector = (state: RootState) => postsResultSelector(state).data ?? usersInitialState;

export const { selectAll: selectAllUsers } = usersAdapter.getSelectors(postsDataSelector);
