import React from 'react';
import CommentsPagination from '../CommentsPagination/CommentsPagination';

function CommentsPage({match}) {
    return <CommentsPagination page = {match.params.page} />
}

export default CommentsPage;