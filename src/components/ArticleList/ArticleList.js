import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import accordion from '../../decorators/accordion';
import {connect} from 'react-redux';
import { filterArticlesSelector } from '../../selectors';
import {loadAllArticles} from '../actions/index';
import Loader from '../Loader/Loader';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if (!loaded && !loading) loadAllArticles();
    }

    render() {
        const {articles, openArticleId, toggleOpenArticle, loading} = this.props;
        if (loading) return <Loader />
        const articleElements = articles.map((article) => 
            <li key = {article.title.replace(/\s/g, '')}>
                <Article 
                    article={article} 
                    isOpen = {article.id === openArticleId} 
                    toggleOpen = {toggleOpenArticle(article.id)} />
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

export default connect(mapStateToProps, {loadAllArticles})(accordion(ArticleList));