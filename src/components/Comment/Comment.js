import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
    return (
        <div>
            <p><b>Author: {comment.user}</b></p>
            <p>{comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

export default Comment;