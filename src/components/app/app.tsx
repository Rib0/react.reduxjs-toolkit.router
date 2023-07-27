import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';

import { useAppDispatch } from '@/hooks/redux';
import { fetchCommentsAction } from '@/store/comments/comments.actions';
import { useGetPostsQuery, useGetUsersQuery } from '@/services';
import { router } from '@/utils/router';

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    useGetUsersQuery();
    useGetPostsQuery();

    useEffect(() => {
        dispatch(fetchCommentsAction());
    }, []);

    return <RouterProvider router={router} />;
};

export { App };
