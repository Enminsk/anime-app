import { LOAD_STATUSES } from '../constants';
import { AnimeActions } from './constants'

const INITIAL_STATE = {
    data: {},
    loadStatus: LOAD_STATUSES.UNKNOWN,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AnimeActions.fetchStart: {
            return {
                data: state.data,
                loadStatus: LOAD_STATUSES.LOADING,
            }
        }
        case AnimeActions.fetchError: {
            return {
                data: {},
                loadStatus: LOAD_STATUSES.ERROR,
            }
        }
        case AnimeActions.fetchSuccess: {
            return {
                data: action.payload,
                loadStatus: LOAD_STATUSES.LOADED,
            }
        }
        default:
            return state;
    }
};
