import { CHANGE_DATES } from '../constants/actions';

const defaultFilters = {
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
            }
    }

    return filters;
}