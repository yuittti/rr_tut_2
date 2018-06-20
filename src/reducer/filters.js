import { CHANGE_DATES, CHANGE_SELECTION } from '../constants/actions';

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_DATES:
            return {
                ...filters,
                dateRange: payload.dateRange
            };
        case CHANGE_SELECTION:
            return {
                ...filters,
                selected: payload.selected
            }
    }

    return filters;
}