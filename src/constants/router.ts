export const PATHS = {
    root: '/',
    users: '/users',
    userPosts: '/users/:userId/posts',
    userPost: '/users/:userId/posts/:postId',
};

export const NAVIGATION_ITEMS = [
    {
        path: PATHS.root,
        label: 'Home',
    },
    {
        path: PATHS.users,
        label: 'Users',
    },
];
