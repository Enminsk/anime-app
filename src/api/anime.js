const urlAnime = 'https://api.jikan.moe/v4/top/';
const urlSearch = 'https://api.jikan.moe/v4/anime?q=';

export const getAnime = ({ type }) => {
    return fetch(`${urlAnime}${type}`).then((r) => r.json()
    );
};

export const getSearch = (text) => {
    return fetch(`${urlSearch}${text}`).then((r) => r.json()
    );
};
