import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import toggleOpen from '../../decorators/toggleOpen';
import { loadArticleComments } from '../actions';
import { connect } from 'react-redux';

class CommentList extends Component {
    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    };

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id);
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log(this.context);
        const btnText = isOpen ? 'Hide comments' : 'Show comments';

        return(
            <div>
                <h3>User: {this.context.user}</h3>
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

export default connect(null, {loadArticleComments}, null, {pure: false})(toggleOpen(CommentList));