import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import { CSSTransitionGroup } from 'react-transition-group';
import { deleteArticle, loadArticle } from '../actions';
import './article.css';
import Loader from '../Loader/Loader';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    componentWillReceiveProps({isOpen, loadArticle, article}) {
        if (isOpen && !article.text && !article.loading) loadArticle(article.id);
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick={ this.handleDelete }>DELETE</button>
                <CSSTransitionGroup
                    transitionName='article'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log(ref);
    }

    getBody = () => {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        if (article.loading) return <Loader />
        return (
            <section>
                {article.text}
                <CommentList article = {article} />
            </section>
        )
    }
}

export default connect(null, { deleteArticle, loadArticle })(Article);