import {DELETE_ARTICLE, INCREMENT, CHANGE_DATES, CHANGE_SELECTION} from '../../constants/actions';

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

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}