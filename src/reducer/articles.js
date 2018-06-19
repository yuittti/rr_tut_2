import { articles as defaultArticles } from '../data/data';
import {DELETE_ARTICLE} from '../constants/actions';

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action;

    switch(type) {
        case DELETE_ARTICLE:
            console.log('----del');
            return articleState.filter(article => article.id !== payload.id);

    }

    return articleState;
}