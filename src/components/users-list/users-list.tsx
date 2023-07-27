import React from 'react';

import { useGetUsersQuery } from '@/services';

const UsersList: React.FC = () => {
    const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();

    const isLoading = isUsersLoading;

    if (isLoading) {
        return <div>loading...</div>;
    }

    return (
        <ul>
            {users?.map((user) => (
                <li>{user.username}</li>
            ))}
        </ul>
    );
};

export { UsersList };
