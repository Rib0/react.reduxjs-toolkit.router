import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from '@/constants/router';
import { Layout } from '@/components/layout';
import { Index } from '@/pages/index';
import { Users } from '@/pages/users';

export const router = createBrowserRouter([
    {
        path: PATHS.root,
        Component: Layout,
        children: [
            { index: true, Component: Index },
            { path: PATHS.users, Component: Users },
        ],
    },
]);
