import { normalizedArticles as defaultArticles } from '../data/data';
import { arrToMap } from '../helpers';
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants/actions';

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload, randomId} = action;

    switch(type) {
        case DELETE_ARTICLE:
            const tmpState = {...articleState};
            delete tmpState[payload.id]
            return tmpState;
        
        case ADD_COMMENT:
            const article = articleState[payload.articleId];

            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
    }

    return articleState;
}