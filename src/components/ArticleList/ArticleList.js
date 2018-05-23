import React from 'react';
import Article from '../Article/Article';

const ArticleList = ({articles}) => {
    const articleElements = articles.map((article) => 
        <li key = {article.title.replace(/\s/g, '')}>
            <Article article={article} />
        </li>
    );

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList;