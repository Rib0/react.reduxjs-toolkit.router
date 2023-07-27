export const API = {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    services: {
        // Only for async thunks start
        getComments: {
            url: 'https://jsonplaceholder.typicode.com/comments',
            method: 'GET',
        },
        // Only for async thunks end

        // Only for RTK Query start
        getUsers: {
            url: '/users',
            method: 'GET',
        },
        getPosts: {
            url: '/posts',
            method: 'GET',
        },
        getCommentsRTK: {
            url: '/comments',
            method: 'GET',
        },
        // Only for RTK Query end
    },
};
