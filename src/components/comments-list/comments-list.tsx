import React from 'react';

import { useAppSelector } from '@/hooks/redux';
import { commentsStatusSelector, commentsSelector } from '@/store/comments/comments.selectors';

const CommentsList: React.FC = () => {
    const commentsStatus = useAppSelector(commentsStatusSelector);
    const comments = useAppSelector(commentsSelector);

    if (commentsStatus === 'loading') {
        return <div>comments loading...</div>;
    }

    if (commentsStatus === 'failed') {
        return <div>comments error</div>;
    }

    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
            ))}
        </ul>
    );
};

export { CommentsList };
