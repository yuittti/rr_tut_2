import { normalizedComments as defaultComments } from '../data/data';
import {} from '../constants/actions';

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export default (commentState = commentsMap, action) => {
    const {type, payload} = action;

    switch(type) {

    }

    return commentState;
}