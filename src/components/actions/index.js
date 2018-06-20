import {DELETE_ARTICLE, INCREMENT, CHANGE_DATES} from '../../constants/actions';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDates(dateRange) {
    return {
        type: CHANGE_DATES,
        payload: { dateRange }
    }
}