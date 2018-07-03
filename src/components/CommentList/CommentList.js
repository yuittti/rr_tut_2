import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import toggleOpen from '../../decorators/toggleOpen';
import { loadArticleComments } from '../actions';
import { connect } from 'react-redux';

class CommentList extends Component {
    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id);
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const btnText = isOpen ? 'Hide comments' : 'Show comments';

        return(
            <div>
                <button onClick={toggleOpen}>{btnText}</button>
                {getBody({article, isOpen})}
            </div>
        )
    }
}

function getBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
    
    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;
    if (!comments.length) return <p>No comments</p>;

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

export default connect(null, {loadArticleComments})(toggleOpen(CommentList));