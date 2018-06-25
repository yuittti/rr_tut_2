import { normalizedComments as defaultComments } from '../data/data';
import { ADD_COMMENT } from '../constants/actions';
import { arrToMap } from '../helpers';

const commentsMap = arrToMap(defaultComments);

export default (commentState = commentsMap, action) => {
    const {type, payload, randomId} = action;

    switch(type) {
        case ADD_COMMENT:
            return {
                ...commentState,
                [randomId]: payload.comment
            }
    }

    return commentState;
}