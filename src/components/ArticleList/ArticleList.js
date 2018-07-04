import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { filterArticlesSelector } from '../../selectors';
import {loadAllArticles} from '../actions/index';
import Loader from '../Loader/Loader';
import { NavLink } from 'react-router-dom';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string
    }

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if (!loaded && !loading) loadAllArticles();
    }

    render() {
        const {articles, loading} = this.props;
        if (loading) return <Loader />
        const articleElements = articles.map((article) => 
            <li key = {article.title.replace(/\s/g, '')}>
                <NavLink to = {`/articles/${article.id}`} activeStyle = {{ color: 'red' }}>
                    {article.title}
                </NavLink>
                {/* <Article 
                    article={article} 
                    isOpen = {article.id === openArticleId} 
                    toggleOpen = {toggleOpenArticle(article.id)} /> */}
            </li>
        );

        return (
            <ul> 
                {articleElements}
            </ul>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        articles: filterArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}

export default connect(mapStateToProps, {loadAllArticles})(ArticleList);