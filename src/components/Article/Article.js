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
        id: PropTypes.string.isRequired,
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        }),
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        if (!article || (!article.text && !article.loading)) loadArticle(id);
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        if (!article) return null;
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

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), { deleteArticle, loadArticle })(Article);