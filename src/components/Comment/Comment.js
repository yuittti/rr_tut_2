import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../../selectors';

const Comment = ({comment}) => {
    return (
        <div>
            <p><b>Author: {comment.user}</b></p>
            <p>{comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment);