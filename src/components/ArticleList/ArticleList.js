import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import accordion from '../../decorators/accordion';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props;
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

export default accordion(ArticleList);