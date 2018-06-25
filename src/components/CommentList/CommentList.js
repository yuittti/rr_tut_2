import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import toggleOpen from '../../decorators/toggleOpen';

function CommentList({article, isOpen, toggleOpen}) {
    const btnText = isOpen ? 'Hide comments' : 'Show comments';

    return (
        <div>
            <button onClick={toggleOpen}>{btnText}</button>
            {getBody({article, isOpen})}
        </div>
    )
}

function getBody({article: {comments = [], id}, isOpen}) {
    
    if (!isOpen) return null;
    if (!comments.length) return <p>No comments</p>

    return (
        <div>
            <ul>
                {comments.map(id => 
                    <li key={id}>
                        <Comment id = {id} />
                    </li>
                )}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

export default toggleOpen(CommentList);