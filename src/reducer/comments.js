import { normalizedComments as defaultComments } from '../data/data';
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants/actions';
import { arrToMap } from '../helpers';
import { OrderedMap, Record } from 'immutable';

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerState = Record({
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (commentState = defaultState, action) => {
    const {type, payload, response, randomId} = action;

    switch(type) {
        case ADD_COMMENT:
            return commentState.setIn(['entities', randomId], new CommentRecord({
                ...payload.comment,
                id: randomId
            }));
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentState.update('entities', entities =>
                entities.merge(arrToMap(response, CommentRecord))
            )
        default:
    }

    return commentState;
}