import { AnimeActions } from './constants';
import { getAnime } from '../api';

export const fetchStart = () => ({
    type: AnimeActions.fetchStart,
});

export const fetchError = () => ({
    type: AnimeActions.fetchError,
});

export const fetchSuccess = (data) => ({
    payload: data,
    type: AnimeActions.fetchSuccess,
});

export const fetchAnime = (data) => {
    return async (dispathc) => {
        try {
            dispathc(fetchStart());
            const anime = await getAnime(data);
            dispathc(fetchSuccess(anime.data));
        } catch {
            dispathc(fetchError())
        }
    };
};